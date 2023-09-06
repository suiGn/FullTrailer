'use client'
import * as React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

async function getBarrido() {
  const res = await fetch('http://localhost:3011/api/getBarrido')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json();
}

export default function BarridoTable({ data }) {
  const [rows, setRows] = useState([]); // Initialize rows as an empty array
  useEffect(() => {
    // Fetch data and update rows when data is available
    getBarrido()
      .then(data => {
        console.log('Fetched data:', data); // Log the fetched data
        setRows(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
    return (
      <TableContainer component={Paper} sx={{ width: '100%' }}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Asset ID</TableCell>
              <TableCell>Vehicle Number</TableCell>
              <TableCell>Number Plates</TableCell>
              <TableCell>Vehicle Brand</TableCell>
              <TableCell>Vehicle Model</TableCell>
              <TableCell>Vehicle Year</TableCell>
              <TableCell>VIN</TableCell>
              <TableCell>Engine Model</TableCell>
              <TableCell>Group Name</TableCell>
              <TableCell>Serial Number</TableCell>
              {/* ... Add more headers as needed */}
            </TableRow>
          </TableHead>
          <TableBody>
          {rows.map((item) => (
              <Row key={item.assetid} row={item} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell>{row.assetid}</TableCell>
          <TableCell>{row.vehiclenumber}</TableCell>
          <TableCell>{row.numberplates}</TableCell>
          <TableCell>{row.vehiclebrand}</TableCell>
          <TableCell>{row.vehiclemodel}</TableCell>
          <TableCell>{row.vehicleyear}</TableCell>
          <TableCell>{row.vin}</TableCell>
          <TableCell>{row.enginemodel}</TableCell>
          <TableCell>{row.groupname}</TableCell>
          <TableCell>{row.serialnumber}</TableCell>
        </TableRow>
        <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: 1 }}>
        <Box>
          <Typography variant="h6" gutterBottom component="div">
            Operador
          </Typography>
          <Typography variant="body2">
            <b>Date:</b> {row.position.date} <br />
            <b> Driver ID:</b>{row.position.driver.driverId} <br />
            <b> Driver Name:</b>{row.position.driver.driverName} <br />
            <b> Driver Last Name:</b>{row.position.driver.driverLastName} <br />
            <b> Driver Key:</b>{row.position.driver.driverKey} <br />
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" gutterBottom component="div">
            Detalles de Posición
          </Typography>
          <Typography variant="body2">
            <b>Altitude</b> {row.position.altitude} <br />
            <b>gpsSpeed:</b> {row.position.gpsSpeed}   <br />
            <b>ignition:</b> {row.position.ignition}   <br />
            <b>latitude:</b> {row.position.latitude}   <br />
            <b>longitude:</b> {row.position.longitude} <br />
            <b>orientation:</b> {row.position.orientation} <br />
            <b>streetReference:</b> {row.position.streetReference} <br />
            <b>nearestCityReference:</b> {row.position.nearestCityReference}  <br />
          </Typography>
         
        </Box>
      </Box>
    </Collapse>
  </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  
