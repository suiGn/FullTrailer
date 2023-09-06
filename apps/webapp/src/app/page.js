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
import CollapsibleTable from '@/app/components/CollapsibleTable';
import { Button } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';

import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const metadata = {
  title: 'FullTrailer',
}

export default async function HomePage() {
  const res = await fetch('https://telemetry-api-tczr3qabsq-uc.a.run.app/clients/1625/users/56067/assets/current-position?key=AIzaSyDoc5HcbJHbj5fJSw1bSq41LqYQ0hb9E_A');
  const data = await res.json();
  return (
    <Box sx={{ display: 'flex' }}>
  <div>
  <ButtonGroup variant="outlined" aria-label="outlined button group">
  <Button>Generar Barrido</Button>
  <Button>Anterior</Button>
  <Button>Siguiente</Button>
  </ButtonGroup>
  <CollapsibleTable />
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
