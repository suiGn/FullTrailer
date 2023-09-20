// src/app/page.js
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import GruasTable from '@/app/components/GruasTable';

export const metadata = {
  title: 'FullTrailer',
}


export default async function GruasPage() {
    return (
    <Box sx={{ display: 'flex' }}>
  <div>
  <h1>Grúas:</h1>
<GruasTable />
      </div>
    </Box>
  );
}