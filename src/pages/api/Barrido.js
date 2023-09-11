// pages/api/Barrido.js
import axios from "axios";

const TABLE_DATA_URL = "/api/tableData";

async function getTableData() {
  try {
    const response = await axios.get(TABLE_DATA_URL);
    return response.data;
  } catch (error) {
    console.log("Error fetching table data", error);
    throw error;
  }
}

export async function handler({ req }) {
  // Fetch the table data from the database
  const tableData = await getTableData();

  // Return the table data as JSON
  return {
    body: JSON.stringify(tableData),
    headers: {
      "content-type": "application/json",
    },
  };
}