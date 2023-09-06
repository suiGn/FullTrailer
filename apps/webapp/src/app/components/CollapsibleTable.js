'use client'
import * as React from 'react';
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

export default function CollapsibleTable() {
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
            {rows.map((row) => (
              <Row key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  const rows = [
    {
    assetid: 63210,
    vehiclenumber: 'TRG-048',
    numberplates: '08AE5N',
    vehiclebrand: 'VOLVO',
    vehiclemodel: 'VNL',
    vehicleyear: '2017',
    vin: '4V4NC9EJ1HN987522',
    enginemodel: 'ISX 15',
    groupname: 'RAFAGAS',
    groups: [
      { groupId: 8570, groupName: 'Acceso a clientes' },
      { groupId: 38669, groupName: 'API-WS-RAFAGAS' }
    ],
    serialnumber: '0580012530',
    position: {
      gpsSpeed: 0.0,
      gpsDistance: 187844.018,
      driver: {
        driverId: 50178,
        driverName: 'OP-63210',
        driverLastName: '-',
        driverKey: '123'
      },
      status: {
        diagnosticStatusId: 14905,
        diagnosticStatus: 'En operación',
        operationalStatusId: 23357,
        operationalStatus: 'Disponible'
      },
      events: [],
      ignition: false,
      orientation: 0.0,
      orientationLabel: 'N',
      satellites: 14,
      temperatures: [],
      nearestCityReference: 'A 6 Km al S de la ciudad: Córdoba, VER.',
      nearestCity: {
        distance: 6.721928425157815,
        name: 'Córdoba, VER',
        orientation: 'S'
      },
      date: '2023-09-05T17:17:23+0000',
      latitude: 18.87462,
      longitude: -96.95816,
      streetReference: null,
      altitude: 877.0,
      isSatelliteSource: false
    }
  }];

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
  