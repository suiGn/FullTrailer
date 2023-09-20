// src/app/page.js
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ConfiguracionesTable from '@/app/components/ConfiguracionesTable';
import ModalConfiguracion from '@/app/components/ModalConfiguracion';
export const metadata = {
  title: 'FullTrailer',
}


export default async function ConfiguracionesPage() {
    return (
    <Box sx={{ display: 'flex' }}>
  <div>
  <h1>Configuraciones:</h1>
<ModalConfiguracion />
<ConfiguracionesTable />
  </div>
    </Box>
  );
}