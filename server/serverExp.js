const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3008;

// PostgreSQL connection configuration
const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Function to insert data into the database
async function insertDataIntoDatabase(newData) {
  const client = await pool.connect();
  console.log('Connected to the database');

  try {
    await client.query('BEGIN');
    console.log('Transaction started');

    for (const item of newData) {
      const query = `
        INSERT INTO suign.fulltrailer.fulltrailerstatus (
          assetId, vehicleNumber, numberPlates, vehicleBrand, vehicleModel,
          vehicleYear, vin, engineModel, groupName, groups, serialNumber, position
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
        ON CONFLICT (assetId) DO UPDATE
        SET vehicleNumber = EXCLUDED.vehicleNumber,
            numberPlates = EXCLUDED.numberPlates,
            vehicleBrand = EXCLUDED.vehicleBrand,
            vehicleModel = EXCLUDED.vehicleModel,
            vehicleYear = EXCLUDED.vehicleYear,
            vin = EXCLUDED.vin,
            engineModel = EXCLUDED.engineModel,
            groupName = EXCLUDED.groupName,
            groups = EXCLUDED.groups,
            serialNumber = EXCLUDED.serialNumber,
            position = EXCLUDED.position;
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
        await client.query('ROLLBACK');
        console.log('Transaction rolled back due to error');
        throw error;
      }
    }

    await client.query('COMMIT');
    console.log('Data saved to the database');
  } catch (error) {
    console.error('Error in transaction:', error);
    throw error;
  } finally {
    client.release();
    console.log('Database connection released');
  }
}

const sampleData = [
    {
      assetId: 1,
      vehicleNumber: 'ABC123',
      numberPlates: 'XYZ456',
      vehicleBrand: 'Toyota',
      vehicleModel: 'Camry',
      vehicleYear: '2022',
      vin: '1234567890',
      engineModel: 'V6',
      groupName: 'Fleet 1',
      groups: { department: 'Logistics', division: 'Trucking' },
      serialNumber: 'S12345',
      position: { latitude: 37.12345, longitude: -122.6789 },
    },
    // Add more data objects as needed
  ];

// Endpoint to insert sample data into the database
app.get('/insertSampleData', async (req, res) => {
  try {
    console.log('Inserting sample data into the database...');
    await insertDataIntoDatabase(sampleData);
    res.json({ message: 'Sample data inserted into the database' });
  } catch (error) {
    console.error('Failed to insert sample data into the database:', error);
    res.status(500).json({ message: 'Failed to insert sample data into the database' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
