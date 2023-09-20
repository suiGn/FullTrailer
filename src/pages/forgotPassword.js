import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from 'next/image'

function Copyright(props) {
    return (
      <div style={{ textAlign: 'center' }}>
       <br /><br /><br /><br />
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

export default function SignIn() {
  const [message, setMessage] = React.useState(''); // State variable to store the response message
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    try {
      // Enviar una solicitud POST al endpoint de restablecimiento de contraseña
      let apiUrl;
      if (process.env.NODE_ENV === 'production') {
        // Si está en prodaucción (Heroku), usa la URL de producción.
        apiUrl = 'https://fulltrailerserver-4d6224ea988e.herokuapp.com/api/';
      } else {
        // Si está en desarrollo (local), usa la URL local.
        apiUrl = 'http://localhost:3011/';
      }
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (response.status === 200) {
        // Éxito: Actualizar el estado con el mensaje de éxito
        setMessage('Correo electrónico de restablecimiento de contraseña enviado. Verifica tu bandeja de entrada.');
      } else if (response.status === 404) {
        // Usuario no encontrado: Actualizar el estado con el mensaje de error
        setMessage('Usuario no encontrado');
      } else {
        // Manejar otros códigos de estado aquí
      }
    } catch (error) {
      console.error('Error al solicitar restablecimiento de contraseña:', error);
    }
  };
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Olvide Contraseña
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Enviar Correo de Recuperación.
            </Button>
            {/* Display the message */}
            {message && (
  <Typography variant="body2" style={{ color: message.includes('contraseña enviado') ? 'green' : 'red' }}>
    {message}
  </Typography>
)}
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"No tienes una cuenta? Registrate"}
                </Link><br />
                <Link href="/login" variant="body2">
                  {"Iniciar Sesión"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}