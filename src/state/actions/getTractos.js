// actions.js
import axios from 'axios';

export const GET_TRACKAMOES = 'GET_TRACKAMOES';

export function getTractos() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/getTractos`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      dispatch({ type: GET_TRACKAMOES, payload: response.data });
    } catch (err) {
      console.error('Error fetching tractos: ', err);
      return Promise.reject(err);
    }
  };
}