const express = require('express');
const axios = require('axios');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const API_ENDPOINT = 'https://telemetry-api-tczr3qabsq-uc.a.run.app/clients/1625/users/56067/assets/current-position?key=AIzaSyDoc5HcbJHbj5fJSw1bSq41LqYQ0hb9E_A';

app.get('/fetchData', async (req, res) => {
  try {
    const response = await axios.get(API_ENDPOINT);
    const newData = response.data;

    fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
        console.log('Error reading the file:', err);
        return;
      }

      // Convert the file content to a JavaScript object
      const existingData = JSON.parse(data || '[]');
    
      // Append the new data to the existing data
      existingData.push(newData);
      // Save the combined data back to the file
      fs.writeFile('data.json', JSON.stringify(existingData, null, 2), (err) => {
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

setInterval(async () => {
  try {
    const response = await axios.get(API_ENDPOINT);
    const newData = response.data;

    const existingData = fs.readFileSync('data.json', 'utf8');
    const combinedData = [...JSON.parse(existingData || '[]'), newData];

    fs.writeFileSync('data.json', JSON.stringify(combinedData, null, 2));
    console.log('Data updated');
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}, 21 * 60 * 1000); // 45 minutes in milliseconds
