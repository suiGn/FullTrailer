// src/app/tractocamiones/page.js
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TractocamionesTable from '@/app/components/TractocamionesTable';

export const metadata = {
  title: 'FullTrailer',
}

export default async function TractosPage() {
    return (
    <Box sx={{ display: 'flex' }}>
  <div>
  <h1>Tractocamiones:</h1>
<TractocamionesTable />
      </div>
    </Box>
  );
}