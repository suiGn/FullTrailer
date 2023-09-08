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

app.get('/api/getRemolques', async (req, res) => {
  console.log("Query Remolques");
  try {
    // Replace 'your_query_here' with the SQL query to retrieve remolques data
    const remolquesQuery = 'SELECT * FROM suign.fulltrailer.remolques';
    // Execute the query to fetch remolques data
    const remolquesResult = await pool.query(remolquesQuery);
    // Return the fetched remolques data as a JSON response
    res.json(remolquesResult.rows);
  } catch (error) {
    console.error('Error al obtener datos de la base de datos:', error);
    res.status(500).json({ error: 'Error al obtener datos de la base de datos' });
  }
});

app.get('/api/getDollies', async (req, res) => {
  console.log("Query Dollies");
  try {
    // Replace 'your_query_here' with the SQL query to retrieve dollies data
    const dolliesQuery = 'SELECT * FROM suign.fulltrailer.dollies';
    // Execute the query to fetch dollies data
    const dolliesResult = await pool.query(dolliesQuery);
    // Return the fetched dollies data as a JSON response
    res.json(dolliesResult.rows);
  } catch (error) {
    console.error('Error al obtener datos de la base de datos:', error);
    res.status(500).json({ error: 'Error al obtener datos de la base de datos' });
  }
});

app.get('/api/getConfiguraciones', async (req, res) => {
  console.log("Query Configuraciones");
  try {
    // Reemplaza 'tu_consulta_aqui' con la consulta SQL para recuperar datos de configuraciones
    const configuracionesQuery = 'SELECT * FROM suign.fulltrailer.configuraciones';
    // Ejecuta la consulta para obtener datos de configuraciones
    const configuracionesResult = await pool.query(configuracionesQuery);
    // Devuelve los datos de configuraciones recuperados como respuesta JSON
    res.json(configuracionesResult.rows);
  } catch (error) {
    console.error('Error al obtener datos de configuraciones desde la base de datos:', error);
    res.status(500).json({ error: 'Error al obtener datos de configuraciones desde la base de datos' });
  }
});

app.get('/api/getVehiculos', async (req, res) => {
  console.log("Query Vehiculos");
  try {
    // Replace 'your_query_here' with the SQL query to retrieve tractocamiones data
    const vehiculosQuery = 'SELECT * FROM suign.fulltrailer.vehiculos';
    // Execute the query to fetch tractocamiones data
    const vehiculosResult = await pool.query(vehiculosQuery);
    // Return the fetched tractocamiones data as a JSON response
    res.json(vehiculosResult.rows);
  } catch (error) {
    console.error('Error al obtener datos de la base de datos:', error);
    res.status(500).json({ error: 'Error al obtener datos de la base de datos' });
  }
});

app.get('/api/getGruas', async (req, res) => {
  console.log("Query Tractos");
  try {
    // Replace 'your_query_here' with the SQL query to retrieve tractocamiones data
    const gruasQuery = 'SELECT * FROM suign.fulltrailer.gruas';
  
    // Execute the query to fetch tractocamiones data
    const gruasResult = await pool.query(gruasQuery);
    
    // Return the fetched tractocamiones data as a JSON response
    res.json(gruasResult.rows);
  } catch (error) {
    console.error('Error al obtener datos de la base de datos:', error);
    res.status(500).json({ error: 'Error al obtener datos de la base de datos' });
  }
});

app.get('/api/getTractocamionesDisponibles', async (req, res) => {
  console.log("Query Tractocamiones Disponibles");
  try {
    // Reemplaza 'tu_consulta_aqui' con la consulta SQL para recuperar tractocamiones disponibles
    const tractocamionesQuery = 'SELECT * FROM suign.fulltrailer.tractocamiones WHERE "idconfiguracion" IS NULL';
    // Ejecuta la consulta para obtener tractocamiones disponibles
    const tractocamionesResult = await pool.query(tractocamionesQuery);
    // Devuelve los datos de tractocamiones disponibles como respuesta JSON
    res.json(tractocamionesResult.rows);
  } catch (error) {
    console.error('Error al obtener datos de tractocamiones disponibles desde la base de datos:', error);
    res.status(500).json({ error: 'Error al obtener datos de tractocamiones disponibles desde la base de datos' });
  }
});

app.get('/api/getRemolquesDisponibles', async (req, res) => {
  console.log("Query Remolques Disponibles");
  try {
    // Reemplaza 'tu_consulta_aqui' con la consulta SQL para recuperar remolques disponibles
    const remolquesQuery = 'SELECT * FROM suign.fulltrailer.remolques WHERE "idconfiguracion" IS NULL';
    // Ejecuta la consulta para obtener remolques disponibles
    const remolquesResult = await pool.query(remolquesQuery);
    // Devuelve los datos de remolques disponibles como respuesta JSON
    res.json(remolquesResult.rows);
  } catch (error) {
    console.error('Error al obtener datos de remolques disponibles desde la base de datos:', error);
    res.status(500).json({ error: 'Error al obtener datos de remolques disponibles desde la base de datos' });
  }
});

app.get('/api/getDolliesDisponibles', async (req, res) => {
  console.log("Query Dollies Disponibles");
  try {
    // Reemplaza 'tu_consulta_aqui' con la consulta SQL para recuperar dollies disponibles
    const dolliesQuery = 'SELECT * FROM suign.fulltrailer.dollies WHERE "idconfiguracion" IS NULL';
    // Ejecuta la consulta para obtener dollies disponibles
    const dolliesResult = await pool.query(dolliesQuery);
    // Devuelve los datos de dollies disponibles como respuesta JSON
    res.json(dolliesResult.rows);
  } catch (error) {
    console.error('Error al obtener datos de dollies disponibles desde la base de datos:', error);
    res.status(500).json({ error: 'Error al obtener datos de dollies disponibles desde la base de datos' });
  }
});

app.post('/api/insertConfiguracion', async (req, res) => {
  try {
    const configuracion = req.body; // Obtiene la configuración del cuerpo de la solicitud POST
    // Comenzamos una transacción para garantizar la integridad de los datos
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      // Inserta la configuración en tu base de datos y obtén el ID resultante
      const insertConfiguracionQuery = `
        INSERT INTO suign.fulltrailer.configuraciones (
        tipo,
        estado,
        remolquedelantero,
        remolquetrasero,
        dolly,
        tractocamion
      ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;

      const insertConfiguracionValues = [
        configuracion.Modalidad,
        'Activa', // Puedes establecer el estado como 'Activa' al crear la configuración
        configuracion.RemolqueDelantero,
        configuracion.RemolqueTrasero,
        configuracion.Dolly,
        configuracion.Tractocamion
      ];

      const configuracionResult = await client.query(insertConfiguracionQuery, insertConfiguracionValues);
      const configuracionId = configuracionResult.rows[0].id;

      // Función para insertar datos en una tabla relacionada
      const updateIdConfiguracion = async (tableName, clave, idconfiguracion) => {
        if (clave) {
          const updateQuery = `
            UPDATE ${tableName}
            SET idconfiguracion = $1
            WHERE clave = $2`;
      
          const updateValues = [idconfiguracion, clave];
          await client.query(updateQuery, updateValues);
        }
      };

      // Inserta los datos relacionados en las tablas
      await updateIdConfiguracion('suign.fulltrailer.tractocamiones', configuracion.Tractocamion, configuracionId);
      await updateIdConfiguracion('suign.fulltrailer.remolques', configuracion.RemolqueDelantero, configuracionId);
      await updateIdConfiguracion('suign.fulltrailer.remolques', configuracion.RemolqueTrasero, configuracionId);
      await updateIdConfiguracion('suign.fulltrailer.dollies', configuracion.Dolly, configuracionId);

      // Realiza el commit de la transacción
      await client.query('COMMIT');

      // Devuelve la configuración insertada como respuesta JSON
      res.status(201).json({ id: configuracionId });
    } catch (error) {
      // En caso de error, realiza un rollback de la transacción
      await client.query('ROLLBACK');
      throw error;
    } finally {
      // Siempre libera la conexión de la base de datos, incluso en caso de error
      client.release();
    }
  } catch (error) {
    console.error('Error al insertar la configuración:', error);
    res.status(500).json({ error: 'Hubo un error al insertar la configuración' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});