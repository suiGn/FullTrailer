const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3002;

const API_ENDPOINT = 'https://telemetry-api-tczr3qabsq-uc.a.run.app/clients/1625/users/56067/assets/current-position?key=your-api-key';

// Middleware setup
app.use(cors());

// Endpoint to fetch and store data
app.get('/fetchData', async (req, res) => {
  try {
    const response = await axios.get(API_ENDPOINT);
    const newData = response.data;

    fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
      if (err) {
        console.log('Error reading the file:', err);
        return;
      }

      // Convert the file content to a JavaScript object
      const existingData = JSON.parse(data || '[]');
    
      // Append the new data to the existing data
      existingData.push(newData);
      // Save the combined data back to the file
      fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(existingData, null, 2), (err) => {
        if (err) {
          console.log('Error writing the file:', err);
          return;
        }

        console.log('Data appended to data.json');
        res.json(newData);
      });
    });

  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch data' });
  }
});

// Endpoint to periodically update data
setInterval(async () => {
  try {
    const response = await axios.get(API_ENDPOINT);
    const newData = response.data;

    const existingData = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8');
    const combinedData = [...JSON.parse(existingData || '[]'), newData];

    fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(combinedData, null, 2));
    console.log('Data updated');
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}, 1 * 60 * 1000); // 45 minutes in milliseconds

// Endpoint for FullTrailerStatus
app.get('/FullTrailerStatus', async (req, res) => {
  try {
    const response = await axios.get(API_ENDPOINT);
    const status = response.data.status; // Replace with the actual status property
    res.json({ status });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch status' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
