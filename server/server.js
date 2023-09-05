const express = require('express');
require('dotenv').config();
const API_KEY = process.env.TELEMETRY_API_KEY;
const axios = require('axios');
const path = require('path');
const cron = require('node-cron');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3008;

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
    for (const item of newData) {
      const query = `
        INSERT INTO suign.fulltrailer.fulltrailerstatus (
          assetId, vehicleNumber, numberPlates, vehicleBrand, vehicleModel,
          vehicleYear, vin, engineModel, groupName, groups, serialNumber, position
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);
      `;
    
      const values = [
        item.assetId, item.vehicleNumber, item.numberPlates, item.vehicleBrand,
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
cron.schedule('*/2 * * * *', async () => {
  try {
    console.log('Fetching and logging data...');
    const newData = await fetchDataFromAPI();
    await insertDataIntoDatabase(newData);
    console.log('Fetch and log completed');
  } catch (error) {
    console.error('Error fetching and logging data:', error);
  }
});

app.get('/', (req, res) => {
  res.render('index', { title: 'FullTrailer Server' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});