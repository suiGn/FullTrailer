// src/app/page.js
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import MediaCard from '@/app/components/MediaCard';
import { Button } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import VehiculosTable from '@/app/components/VehiculosTable';

export const metadata = {
  title: 'FullTrailer',
}

export default async function VehiculosPage() {
    return (
    <Box sx={{ display: 'flex' }}>
  <div>
  <h1>Vehículos:</h1>
<VehiculosTable />
      </div>
    </Box>
  );
}