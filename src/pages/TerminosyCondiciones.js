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
            

La aplicación FullTrailer (en adelante, "la Aplicación") ha sido desarrollada por Neurons Art and Technology (en adelante, "Neurons") con el propósito de brindar funcionalidades y servicios a sus usuarios. Al utilizar esta Aplicación, usted acepta los siguientes términos y condiciones:

<b>1. Uso de la Aplicación</b><br />
Usted reconoce y acepta que la Aplicación se proporciona "tal cual" y "según disponibilidad". Neurons no garantiza la precisión, integridad o idoneidad de la información contenida en la Aplicación. El uso de la Aplicación es bajo su propio riesgo.
<br /><b>2. Resultados y Precisión</b><br />
La Aplicación puede proporcionar resultados, recomendaciones o información. Neurons no se hace responsable de la precisión, confiabilidad o calidad de estos resultados. Los resultados generados por la Aplicación deben ser verificados y evaluados por el usuario antes de tomar cualquier decisión basada en ellos.
<br /><b>3. Prueba Gratuita</b><br />
La Aplicación puede ofrecer una versión de prueba gratuita. Durante este período, Neurons no se hace responsable de la información generada por la Aplicación ni de los resultados obtenidos.
<br /><b>4. Limitación de Responsabilidad</b><br />
Neurons no será responsable de ningún daño directo, indirecto, incidental, especial, consecuente o punitivo que surja del uso de la Aplicación o cualquier otro servicio relacionado. Esto incluye, pero no se limita a, la pérdida de datos, la pérdida de ingresos o la interrupción del negocio.
<br /><b>5. Modificaciones</b><br />
Neurons se reserva el derecho de realizar modificaciones en la Aplicación, incluyendo la suspensión o discontinuación de sus servicios, en cualquier momento y sin previo aviso.
<br /><b>6. Aceptación de Términos y Condiciones</b><br />
El uso de la Aplicación constituye la aceptación de estos términos y condiciones. Si no está de acuerdo con estos términos, le recomendamos que deje de utilizar la Aplicación.
<b>7. Ley Aplicable</b><br />
Estos términos y condiciones están sujetos a las leyes del lugar de incorporación de Neurons, y cualquier disputa relacionada con la Aplicación estará sujeta a la jurisdicción exclusiva de los tribunales de dicho lugar.
<b>8. Contacto</b><br />

Si tiene alguna pregunta o inquietud sobre estos términos y condiciones, puede ponerse en contacto con Neurons en [admin@neurons.me].
Al utilizar la Aplicación FullTrailer, usted acepta y reconoce estos términos y condiciones en su totalidad. Neurons se reserva el derecho de modificar estos términos en cualquier momento sin previo aviso.

Última actualización: [Sept-14-2023]
          
          
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