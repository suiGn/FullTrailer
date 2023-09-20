import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Image from 'next/image'

function Copyright(props) {
    return (
      <div style={{ textAlign: 'center' }}>
      <Image
        src="/_._.svg" // Reference the SVG file from the public directory
        alt="Witness Our Seal."
        width={55}
        height={55}
        style={{ display: 'block', margin: '0 auto' }} // Center the image horizontally
      />
      <Typography variant="body2" color="text.secondary">
        <Link color="inherit" href="https://neurons.me/" target="_blank" rel="noopener noreferrer">
        {'Copyright by '}
          neurons.me 2023
        </Link>
        {'.'}
      </Typography>
    </div>
    );
  }

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function StickyFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
          Términos y Condiciones.
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {'Descargo de Responsabilidad - FullTrailer.'}
            {'FullTrailer.'}
          </Typography>
          <Typography variant="body1">
            
Reducir las horas de operación de los camiones no solo tiene beneficios ambientales, sino que también puede reducir costos operativos y mejorar la vida útil de los vehículos. Aquí hay algunas estrategias y tecnologías que podrías considerar para lograr tu objetivo:
<br />
<b>Optimización de Rutas:</b>  Utiliza software de gestión de flotas que pueda optimizar rutas en tiempo real, evitando tráfico, construcciones y otros obstáculos. Esto puede reducir significativamente las horas de operación.
<br />
<b>Capacitación de Conductores:</b> Entrena a los conductores en técnicas de conducción eficiente. Evitar aceleraciones y frenados bruscos, mantener una velocidad constante y usar el motor de manera eficiente puede reducir el tiempo de operación y el consumo de combustible.
<br />
<b>Mantenimiento Preventivo:</b> Un camión bien mantenido es más eficiente. Establece un programa regular de mantenimiento para asegurarte de que los camiones operen en su máxima eficiencia.
<br />
<b>Tecnología de Parada y Arranque Automático:</b> Considera invertir en camiones que tengan sistemas de parada y arranque automático. Estos sistemas apagan el motor cuando el camión está detenido y lo reinician cuando es necesario, reduciendo el tiempo de operación del motor.
<br />
<b>Electrificación de la Flota:</b> Si es viable, considera la posibilidad de incorporar camiones eléctricos a tu flota. Estos camiones pueden operar de manera más eficiente y tienen la ventaja de producir cero emisiones locales.
<br />
<b>Telemetría y Monitoreo en Tiempo Real:</b> Utiliza sistemas de telemetría para monitorear el comportamiento de los conductores y la eficiencia de los camiones en tiempo real. Esto te permite identificar áreas de mejora y actuar rápidamente.
<br />
<b>Planificación de Cargas:</b> Asegúrate de que los camiones estén transportando cargas completas siempre que sea posible. Un camión parcialmente cargado que realiza varios viajes es menos eficiente que un camión completamente cargado que realiza un solo viaje.
<br />
<b>Colaboración y Compartición de Cargas:</b> Considera colaborar con otras empresas de transporte para compartir cargas y rutas. Esto puede reducir el número de camiones en la carretera y, por lo tanto, las horas de operación.
<br />
<b>Incentivos para Conductores:</b> Ofrece incentivos para los conductores que logren reducir sus horas de operación a través de una conducción eficiente y una buena planificación.
<br />
<b>Educación y Conciencia:</b> Fomenta una cultura de sostenibilidad y eficiencia en tu empresa. Cuando todos están alineados con un objetivo común, es más probable que se logre.

Recuerda que cada flota y operación es única, por lo que es importante adaptar estas estrategias a tus necesidades específicas. ¡Buena suerte en tu misión de hacer del transporte un sector más sostenible y eficiente!
          
          </Typography>
        </Container>
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
                <a href="/">Inicio</a><br />
                <a href="/login">Iniciar Sesión.</a><br />
                <a href="/signup">Registrarse</a>
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}