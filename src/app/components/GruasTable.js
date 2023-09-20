'use client'
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import useAuth from '@/utils/auth';

const columns = [
  { field: 'clave', headerName: 'Clave', width: 130 },
  { field: 'descripcion', headerName: 'Descripcion', width: 130 },
  { field: 'marca', headerName: 'Marca', width: 130 },
  { field: 'modelo', headerName: 'Modelo', width: 130 },
  { field: 'placas', headerName: 'Placas', width: 130 },
  { field: 'numSerie', headerName: 'NumSerie', width: 130 },
  { field: 'categoria', headerName: 'Categoria', width: 130 },
  { field: 'tipo', headerName: 'Tipo', width: 130 },
  { field: 'activo', headerName: 'Activo', width: 130 },
  { field: 'assetid', headerName: 'Asset ID', width: 130 },
];

async function getGruas() {
  const token = localStorage.getItem('jwtToken');
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/getGruas`, {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
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

export default function gruasTable() {
  const [rows, setRows] = useState([]);
  useAuth(); // This will run the authentication check
  useEffect(() => {
    getGruas()
      .then(data => {
        setRows(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div style={{ height: '89vh',  minWidth: '610'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={50} // Specify the number of rows per page
        checkboxSelection // Enable checkboxes for selection
      />
    </div>
  );
}