'use client'
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'clave', headerName: 'Clave', width: 130 },
  { field: 'marca', headerName: 'Marca', width: 130 },
  { field: 'modelo', headerName: 'Modelo', width: 130 },
  { field: 'numserial', headerName: 'NumSerial', width: 130 },
  { field: 'placas', headerName: 'Placas', width: 130 },
  { field: 'categoria', headerName: 'Categoria', width: 130 },
  { field: 'tipo', headerName: 'Tipo', width: 130 },
  { field: 'activo', headerName: 'Activo', width: 130 },
];

async function getRemolques() {
  const res = await fetch('http://localhost:3011/api/getRemolques');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const responseData = await res.json();

  // Add unique IDs to your rows (assuming 'clave' can be used as an ID)
  const rowsWithIds = responseData.map((row, index) => ({
    ...row,
    id: row.clave || index, // You can replace 'index' with an appropriate default value
  }));

  return rowsWithIds;
}

export default function RemolquesTable() {
  const [rows, setRows] = useState([]);
  
  useEffect(() => {
    getRemolques()
      .then(data => {
        setRows(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{ height: '89vh' , width: '100%',  minWidth: '610'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={50} // Specify the number of rows per page
        checkboxSelection // Enable checkboxes for selection
      />
    </div>
  );
}