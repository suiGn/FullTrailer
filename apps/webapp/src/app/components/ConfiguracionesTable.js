'use client'
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'tipo', headerName: 'Tipo', width: 130 },
  { field: 'estado', headerName: 'Estado', width: 130 },
  { field: 'tractocamion', headerName: 'Tracto', width: 130 },
  { field: 'remolquedelantero', headerName: 'Remolque Delantero', width: 130 },
  { field: 'dolly', headerName: 'Dolly', width: 130 },
  { field: 'remolquetrasero', headerName: 'Remolque Trasero', width: 130 },
];

async function getConfiguraciones() {
  const res = await fetch('http://localhost:3011/api/getConfiguraciones');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const responseData = await res.json();
  // Asigna IDs únicos a tus filas
  const rowsWithIds = responseData.map((row, index) => ({
    ...row,
    id: row.id || index, // Puedes reemplazar 'index' con un valor predeterminado apropiado
  }));
  return rowsWithIds;
}

export default function ConfiguracionesTable() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    getConfiguraciones()
      .then(data => {
        setRows(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div style={{ height: '89vh', width: '100%', minWidth: '610' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={50} // Especifica la cantidad de filas por página
        checkboxSelection // Habilita casillas de verificación para selección
      />
    </div>
  );
}