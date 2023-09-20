// src/app/page.js
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import BarridoTable from '@/app/components/StatusTable';

export const metadata = {
  title: 'FullTrailer',
}
 
export default async function StatusPage() {
    return (
    <Box sx={{ display: 'flex' }}>
  <div>
<BarridoTable />
      </div>
    </Box>
  );
}