import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function HomePage() {
  return (
    <Box sx={{ display: 'flex' }}>
      <div>
        <Alert severity="info" sx={{ mt: 2, mb: 5 }}>
          <AlertTitle>Alert👋</AlertTitle>
          FullTrailer App Running on Development Mode.
        </Alert>
       
        <h1>Inicio</h1>

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
             Inicio
            </Typography>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
