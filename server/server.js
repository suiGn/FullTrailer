const express = require('express');
require('dotenv').config();
const API_KEY = process.env.TELEMETRY_API_KEY;
const axios = require('axios');
const cors = require('cors')
const path = require('path');
const cron = require('node-cron');
const { Pool } = require('pg');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3011;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

async function fetchDataFromAPI() {
  try {
    const response = await axios.get(API_KEY);
    const newData = response.data.data;
    console.log('Fetch succeed'); 
    return newData;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

async function insertDataIntoDatabase(newData) {
  const client = await pool.connect();
  await client.query('BEGIN');

  try {
    // Obtener la fecha de la transacción actual
    const queryDate = new Date();

    // Insertar en la tabla statusupdates primero, incluyendo la fecha
    const statusInsertQuery = `
      INSERT INTO suign.fulltrailer.statusupdates (transactionID, querydate) VALUES ($1, $2) RETURNING id;
    `;
    const transactionID = uuidv4(); 
    console.log("transactionId ", transactionID);
    const statusInsertValues = [transactionID, queryDate];
    const statusInsertResult = await client.query(statusInsertQuery, statusInsertValues);
    const statusUpdateID = statusInsertResult.rows[0].id;

    // Insertar en la tabla fulltrailerstatus usando el ID de statusupdates
    for (const item of newData) {
      const query = `
        INSERT INTO suign.fulltrailer.fulltrailerstatus (
          transactionID, assetId, vehicleNumber, numberPlates, vehicleBrand, vehicleModel,
          vehicleYear, vin, engineModel, groupName, groups, serialNumber, position
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);
      `;
    
      const values = [
        transactionID, item.assetId, item.vehicleNumber, item.numberPlates, item.vehicleBrand,
        item.vehicleModel, item.vehicleYear, item.vin, item.engineModel,
        item.groupName, JSON.stringify(item.groups), item.serialNumber,
        JSON.stringify(item.position)
      ];
    
      try {
        await client.query(query, values);
        console.log(`Inserted data for assetId ${item.assetId}`);
      } catch (error) {
        console.error(`Error inserting data for assetId ${item.assetId}:`, error);
        throw error;
      }
    }
  
    await client.query('COMMIT');
    console.log('Data saved to the database');
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error inserting data:', error);
    throw error;
  } finally {
    client.release();
  }
}
// Ejecutar fetchDataFromAPI y insertDataIntoDatabase cada 2 minutos
cron.schedule('*/60 * * * *', async () => {
  try {
    console.log('Fetching and logging data...');
    const newData = await fetchDataFromAPI();
    await insertDataIntoDatabase(newData);
    console.log('Fetch and log completed');
  } catch (error) {
    console.error('Error fetching and logging data:', error);
  }
});

app.use(cors());

app.get('/', (req, res) => {
  res.render('index', { title: 'FullTrailer Server' });
});


app.get('/api/getMotumStatus', async (req, res) => {
  console.log("Query Barrido");
  try {
    // Get the latest transactionID and querydate from the statusupdates table
    const latestTransactionQuery = 'SELECT transactionid, querydate FROM suign.fulltrailer.statusupdates ORDER BY id DESC LIMIT 1';
    const latestTransactionResult = await pool.query(latestTransactionQuery);
    const latestTransaction = latestTransactionResult.rows[0];
    
    // Fetch related data from the fulltrailerstatus table using the latest transactionID
    const relatedDataQuery = 'SELECT * FROM suign.fulltrailer.fulltrailerstatus WHERE transactionID = $1';
    const relatedDataResult = await pool.query(relatedDataQuery, [latestTransaction.transactionid]);
    
    // Create an object to hold both pieces of data, including querydate
    const responseData = {
      latestTransaction: {
        transactionid: latestTransaction.transactionid,
        querydate: latestTransaction.querydate,
      },
      relatedData: relatedDataResult.rows
    };
    
    // Return the combined data as a JSON response
    res.json(responseData);
  } catch (error) {
    console.error('Error al obtener datos de la base de datos:', error);
    res.status(500).json({ error: 'Error al obtener datos de la base de datos' });
  }
});

app.get('/api/getPreviousMotumStatus', async (req, res) => {
  try {
    // Get the desired time range and transactionID from query parameters
    const { startTime, endTime, transactionID } = req.query;
    // Fetch the data based on the provided time range and transactionID
    const result = await pool.query(
      'SELECT * FROM suign.fulltrailer.fulltrailerstatus WHERE transactionID = $1 AND timestamp >= $2 AND timestamp <= $3',
      [transactionID, startTime, endTime]
    );
    // Devuelve los datos como respuesta JSON
    res.json(result.rows);
    console.log("Data Asked ", result);
  } catch (error) {
    console.error('Error al obtener datos de la base de datos:', error);
    res.status(500).json({ error: 'Error al obtener datos de la base de datos' });
  }
});

app.get('/api/getTractos', async (req, res) => {
  console.log("Query Tractos");
  try {
    // Replace 'your_query_here' with the SQL query to retrieve tractocamiones data
    const tractosQuery = 'SELECT * FROM suign.fulltrailer.tractocamiones';
  
    // Execute the query to fetch tractocamiones data
    const tractosResult = await pool.query(tractosQuery);
    
    // Return the fetched tractocamiones data as a JSON response
    res.json(tractosResult.rows);
  } catch (error) {
    console.error('Error al obtener datos de la base de datos:', error);
    res.status(500).json({ error: 'Error al obtener datos de la base de datos' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});