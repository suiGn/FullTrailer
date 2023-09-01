import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(assetId, vehicleNumber, numberPlates, vehicleBrand, vehicleModel, vehicleYear, vin, engineModel,  groupName, groups, serialNumber, position) {
  return { assetId, vehicleNumber, numberPlates, vehicleBrand, vehicleModel, vehicleYear, vin, engineModel,  groupName, groups, serialNumber, position};
}

const rows = [
 
];

export default function BarridoTable() {
  const [lastEntry, setLastEntry] = useState(null);
  useEffect(() => {
    fetch('/api/getData')
      .then(response => response.json())
      .then(fetchedData => {
        const lastData = fetchedData[fetchedData.length - 1]; // Get the last item
        setLastEntry(lastData);
      })
      .catch(error => {
        console.error("There was an error fetching the data", error);
      });
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">AssetId</TableCell>
            <TableCell align="right">VehicleNumber</TableCell>
            <TableCell align="right">NumberPlates</TableCell>
            <TableCell align="right">VehicleBrand</TableCell>
            <TableCell align="right">VehicleModel</TableCell>
            <TableCell align="right">VehicleYear</TableCell>
            <TableCell align="right">Vin</TableCell>
            <TableCell align="right">EngineModel</TableCell>
            <TableCell align="right">GroupName</TableCell>
            <TableCell align="right">Groups</TableCell>
            <TableCell align="right">SerialNumber</TableCell>
            <TableCell align="right">Position</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lastEntry && (
            <TableRow key={lastEntry.assetId}>
              <TableCell align="right">{lastEntry.assetId}</TableCell>
              <TableCell align="right">{lastEntry.vehicleNumber}</TableCell>
              <TableCell align="right">{lastEntry.numberPlates}</TableCell>
              <TableCell align="right">{lastEntry.vehicleBrand}</TableCell>
              <TableCell align="right">{lastEntry.vehicleModel}</TableCell>
              <TableCell align="right">{lastEntry.vehicleYear}</TableCell>
              <TableCell align="right">{lastEntry.vin}</TableCell>
              <TableCell align="right">{lastEntry.engineModel}</TableCell>
              <TableCell align="right">{lastEntry.groupName}</TableCell>
              <TableCell align="right">{lastEntry.groups}</TableCell>
              <TableCell align="right">{lastEntry.serialNumber}</TableCell>
              <TableCell align="right">{lastEntry.position}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}