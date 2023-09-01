
    const axios = require('axios');

    const fetchCurrentPosition = async () => {
        const endpoint = `https://telemetry-api-tczr3qabsq-uc.a.run.app/clients/1625/users/56067/assets/current-position?key=AIzaSyDoc5HcbJHbj5fJSw1bSq41LqYQ0hb9E_A`;
        try {
            const response = await axios.get(endpoint);
    
            console.log(response.data); // print the data from the response
    
            // If you need to handle the data:
            // const data = response.data;

        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Data:', error.response.data);
                console.error('Status:', error.response.status);
                console.error('Headers:', error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error', error.message);
            }
        }
    };
    
    fetchCurrentPosition();
    