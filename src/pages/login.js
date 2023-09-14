import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'; // Import axios
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
      {'Copyright by '} neurons.me
      </Link>
      {'.'}
    </Typography>
  </div>
  );
}

const defaultTheme = createTheme();

export default function SignInSide() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
let apiUrl;
if (process.env.NODE_ENV === 'production') {
// Si está en producción (Heroku), usa la URL de producción.
apiUrl = 'https://fulltrailerserver-4d6224ea988e.herokuapp.com/';
} else {
// Si está en desarrollo (local), usa la URL local.
apiUrl = 'http://localhost:3011/';
}
      const response = await axios.post(apiUrl + 'api/login', {
        username: email, // Envía el email como username
        password: password, // Envía la contraseña
      });
  
      if (response.status === 200) {
        console.log('Login successful');
        // Realizar redireccionamiento o acciones adicionales aquí
      } else {
        const errorMessage = response.data.message; // Obtén el mensaje de error personalizado
        console.log('Login failed:', errorMessage);
        setMessage(errorMessage); // Muestra el mensaje de error en tu componente
      }
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('An error occurred during login. Please try again later.');
    }
  };
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
 
  const randomNumber = getRandomNumber(1, 10);
  const backgroundImageUrl = `/backgrounds/${randomNumber}.jpg`;

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
  item
  xs={false}
  sm={4}
  md={7}
  sx={{
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', // Text color
    position: 'relative', // Add this to create a stacking context
  }}
>
  {/* Dark opacity layer */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(27, 29, 36, 0.8)',
    }}
  />

  {/* Container for text */}
  <div
    style={{
      position: 'relative', // Ensure text is on top of the background
      zIndex: 1, // Set higher z-index to keep text on top
    }}
  >
    <Typography variant="h3" component="div">
      FULL TRAILER
    </Typography>
    <Typography variant="h6" component="div">
      Empoderando tu Transporte y Logística
    </Typography>
  </div>
</Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Iniciar sesión.
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
  <TextField
  margin="normal"
  required
  fullWidth
  id="email"
  label="Correo Electrónico"
  name="email"
  autoComplete="email"
  autoFocus
  value={email} // Agrega el valor actual del estado
  onChange={(e) => setEmail(e.target.value)} // Actualiza el estado al cambiar el valor
/>
<TextField
  margin="normal"
  required
  fullWidth
  name="password"
  label="Contraseña"
  type="password"
  id="password"
  autoComplete="current-password"
  value={password} // Agrega el valor actual del estado
  onChange={(e) => setPassword(e.target.value)} // Actualiza el estado al cambiar el valor
/>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recordarme."
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Iniciar Sesión.
              </Button>
               {/* Mostrar el mensaje */}
        {message && (
          <Typography variant="body2" color="error" align="center">
            {message}
          </Typography>
        )}
              <Grid container>
                <Grid item xs>
                  <Link href="/forgotPassword" variant="body2">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Registra tu Flota."}
                  </Link>
                </Grid>
              </Grid>    
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}