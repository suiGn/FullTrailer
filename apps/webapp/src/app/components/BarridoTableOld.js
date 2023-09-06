import React from 'react';

async function getBarrido() {
  const res = await fetch('http://localhost:3011/api/getBarrido')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json();
}

async function BarridoTable() {
const data = await getBarrido();
  return (
    <table>
      <thead>
        <tr>
        <th>Asset ID</th>
        <th>Vehicle Number</th>
        <th>Number Plates</th>
        <th>Vehicle Brand</th>
        <th>Vehicle Model</th>
        <th>Vehicle Year</th>
        <th>VIN</th>
        <th>Engine Model</th>
        <th>Group Name</th>
        <th>Serial Number</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.assetid}>
            <td>{item.assetid}</td>
            <td>{item.vehiclenumber}</td>
            <td>{item.numberplates}</td>
            <td>{item.vehiclebrand}</td>
            <td>{item.vehiclemodel}</td>
            <td>{item.vehicleyear}</td>
            <td>{item.vin}</td>
            <td>{item.enginemodel}</td>
            <td>{item.groupname}</td>
            <td>{item.serialnumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BarridoTable;
