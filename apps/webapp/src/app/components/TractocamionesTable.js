'use client'

import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

async function getTractos() {
  const res = await fetch('http://localhost:3011/api/getTractos');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const responseData = await res.json();
  return responseData;
}

export default function BasicTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    getTractos()
      .then(data => {
        setRows(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Clave</TableCell>
            <TableCell>Descripcion</TableCell>
            <TableCell>Marca</TableCell>
            <TableCell>Modelo</TableCell>
            <TableCell>Placas</TableCell>
            <TableCell>NumSerie</TableCell>
            <TableCell>Categoria</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Activo</TableCell>
            <TableCell>Asset ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rows.map(row => (
  <TableRow
    key={row.Clave}
    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  >
              <TableCell component="th" scope="row">
                {row.clave}
              </TableCell>
              <TableCell>{row.descripcion}</TableCell>
              <TableCell>{row.marca}</TableCell>
              <TableCell>{row.modelo}</TableCell>
              <TableCell>{row.placas}</TableCell>
              <TableCell>{row.numSerie}</TableCell>
              <TableCell>{row.categoria}</TableCell>
              <TableCell>{row.tipo}</TableCell>
              <TableCell>{row.activo}</TableCell>
              <TableCell>{row.assetid}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}