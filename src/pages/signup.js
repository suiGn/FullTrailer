import * as React from 'react';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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

function SignUp() {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        fleetName: '', 
        address: '', 
        companyName: '', 
      });
      const [message, setMessage] = React.useState('');
      const [emailValid, setEmailValid] = React.useState(true); // Estado para verificar el formato del correo
      const [passwordValid, setPasswordValid] = React.useState(true); 
      const router = useRouter();


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!emailValid) {
      setMessage('Formato de correo electrónico incorrecto');
      return;
    }
    if (!passwordValid) {
      setMessage('La contraseña debe tener al menos 8 caracteres');
      return;
    }
    const aceptoTerminosCheckbox = document.getElementById('acepto-terminos'); // Obtén el elemento del checkbox
    if (!aceptoTerminosCheckbox.checked) {
      setMessage('Debes aceptar los términos y condiciones para registrarte');
      return;
    }
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registration successful
        setMessage('Usuario registrado exitosamente');
        router.push('/'); // Redirige al usuario a la página principal
      } else {
        // Registration failed
        const data = await response.json();
        setMessage(data.message);
      }
    } catch (error) {
      // Handle network errors
      setMessage('Ocurrió un error de red');
      console.error('Error de red:', error);
    }
  };

  const isEmailValid = (email) => {
    // Función para verificar el formato del correo electrónico
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    // Función para verificar condiciones de contraseña (personaliza según tus necesidades)
    return password.length >= 8; // Verifica que la contraseña tenga al menos 8 caracteres
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === 'email') {
      setEmailValid(isEmailValid(value)); // Verifica el formato del correo en tiempo real
    } else if (name === 'password') {
      setPasswordValid(isPasswordValid(value)); // Verifica las condiciones de contraseña en tiempo real
    }
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
       
          <Image
      src="/icons/register.svg" // Reference the SVG file from the public directory
      alt="Witness Our Seal."
      width={144}
      height={144}
      style={{ display: 'block', margin: '0 auto' }} // Center the image horizontally
    />
          <Typography component="h1" variant="h5">
            Registra Tu Empresa.
          </Typography>
           {/* Mostrar el mensaje */}
           {message && (
              <Typography variant="body2" color="text.secondary" align="center">
                {message}
              </Typography>
            )}
           <br></br>
          <form noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Apellido"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Correo Electrónico"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                  error={!emailValid} // Marca el campo de correo si el formato es incorrecto
                  helperText={!emailValid ? 'Formato de correo incorrecto' : ''}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChange}
                  error={!passwordValid} // Marca el campo de contraseña si no cumple con las condiciones
                  helperText={!passwordValid ? 'La contraseña debe tener al menos 8 caracteres' : ''}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="fleetName"
                  label="Nombre de la Flota (Nickname)"
                  id="fleetName"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="companyName"
                  label="Nombre Legal de la Empresa"
                  id="companyName"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="address"
                  label="Dirección"
                  id="address"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
<FormControlLabel
  control={<Checkbox id="acepto-terminos" value="allowExtraEmails" color="primary" />}
  label="Acepto los términos y condiciones."
/><br />
                <Link href="/TerminosyCondiciones" variant="body2">
                  Leer términos y condiciones.
                </Link>
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Registarse.
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  ¿Ya tienes cuenta? Inicia Sesión.
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
      <br />
      <br />
      <br />
      <Container maxWidth="sm">
            <Typography variant="body1">
            </Typography>
            <Copyright />
          </Container>
    </ThemeProvider>
  );
}

export default SignUp;
