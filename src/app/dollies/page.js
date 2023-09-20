// src/app/page.js
import * as React from 'react';
import Box from '@mui/material/Box';
import DolliesTable from '@/app/components/DolliesTable';

export const metadata = {
  title: 'FullTrailer',
}

export default async function DolliesPage() {
    return (
    <Box sx={{ display: 'flex' }}>
  <div>
  <h1>Dollies:</h1>
<DolliesTable />
  </div>
</Box>
  );
}