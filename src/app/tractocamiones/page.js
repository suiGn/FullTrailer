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
import TractocamionesTable from '@/app/components/TractocamionesTable';

export const metadata = {
  title: 'FullTrailer',
}

export default async function TractosPage() {
    return (
    <Box sx={{ display: 'flex' }}>
  <div>
<TractocamionesTable />
      </div>

      <Drawer
        sx={{
          width: 320,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 320,
            boxSizing: 'border-box',
            top: ['48px', '56px', '64px'],
            height: 'auto',
            bottom: 0,
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <List sx={{ px: 2 }}>
          <ListItem disablePadding>
            <Typography variant="overline" sx={{ fontWeight: 500 }}>
              Menu
            </Typography>
          </ListItem>
        </List>
      </Drawer>
      
    </Box>
  );
}