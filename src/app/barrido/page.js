//app/barrido/page.js
import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BarridoTable from '../../components/BarridoTable.client.js';

function BarridoPage() {
  return (
    <div>
      <BarridoTable />
    </div>
  );
}

export default BarridoPage;
