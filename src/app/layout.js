import * as React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import RvHookupIcon from '@mui/icons-material/RvHookup';
import CommitIcon from '@mui/icons-material/Commit';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BuildIcon from '@mui/icons-material/Build';
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';
import WebhookIcon from '@mui/icons-material/Webhook';
import ThemeRegistry from '@/app/components/ThemeRegistry/ThemeRegistry';
import SettingsIcon from '@mui/icons-material/Settings';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Alert } from '@mui/material';

import dotenv from 'dotenv';
dotenv.config();

export const metadata = {
  title: 'FullTrailer',
  description: 'Empowering Logistics',
};

const DRAWER_WIDTH = 240;

const LINKS = [
  { text: 'Home', href: '/', icon: HomeIcon },
  { text: 'Estatus Motum', href: '/estatus', icon: ZoomInMapIcon },
  { text: 'Tractocamiones', href: '/tractocamiones', icon: DirectionsBusFilledIcon },
  { text: 'Remolques', href: '/remolques', icon: RvHookupIcon },
  { text: 'Dollies', href: '/dollies', icon: CommitIcon},
  { text: 'Configuraciones', href: '/configuraciones', icon: LocalShippingIcon},
  { text: 'Operadores', href: '/operadores', icon: PeopleAltIcon },
  { text: 'Rutas', href: '/rutas', icon: AirlineStopsIcon },
  { text: 'Taller', href: '/taller', icon: BuildIcon },
  { text: 'Mecánicos', href: '/mecanicos', icon: EngineeringIcon },
  { text: 'Vehículos', href: '/vehiculos', icon: DirectionsCarIcon },
  { text: 'Grúas', href: '/gruas', icon: WebhookIcon },
];

const PLACEHOLDER_LINKS = [
  { text: 'Settings', href: '/settings', icon: SettingsIcon },
  //{ text: 'Support', icon: SupportIcon },
  { text: 'Logout', icon: LogoutIcon },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AppBar position="fixed" sx={{ zIndex: 2000 }}>
            <Toolbar sx={{ backgroundColor: 'background.paper' }}>
              <DashboardIcon sx={{ color: '#444', mr: 2, transform: 'translateY(-2px)' }} />
              <Typography variant="h6" noWrap component="div" color="black">
                Sitema FullTrailer
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: DRAWER_WIDTH,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: DRAWER_WIDTH,
                boxSizing: 'border-box',
                top: ['48px', '56px', '64px'],
                height: 'auto',
                bottom: 0,
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Divider />
            <List>
              {LINKS.map(({ text, href, icon: Icon }) => (
                <ListItem key={href} disablePadding>
                  <ListItemButton component={Link} href={href}>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider sx={{ mt: 'auto' }} />
            <List>
              {PLACEHOLDER_LINKS.map(({ text, icon: Icon }) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: 'background.default',
              ml: `${DRAWER_WIDTH}px`,
              mt: ['48px', '56px', '64px'],
              p: 3,
            }}
          >
              {/* Use ProtectedRoute to wrap the content */}
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
