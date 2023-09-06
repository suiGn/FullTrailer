import axios from 'axios';

export default async function getBarrido() {
  const url = 'http://localhost:3008/api/getBarrido';
  const options = {
    headers: {
      Accept: 'application/json',
    },
  };

  try {
    const response = await axios.post(url, {}, options);
    console.log(`Response received: ${response}`);
    return response.data;
  } catch (error) {
    console.error(`Error occurred: ${error}`);
    throw error;
  }
}