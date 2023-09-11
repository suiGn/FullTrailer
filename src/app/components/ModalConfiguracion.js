'use client'

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

let apiUrl;

if (process.env.NODE_ENV === 'production') {
  // Si está en producción (Heroku), usa la URL de producción.
  apiUrl = 'https://fulltrailerserver-4d6224ea988e.herokuapp.com/api/';
} else {
  // Si está en desarrollo (local), usa la URL local.
  apiUrl = 'http://localhost:3011/api/';
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [tractocamiones, setTractocamiones] = useState([]); // Estado para tractocamiones
  const [remolques, setRemolques] = useState([]); // Estado para remolques
  // Variables para el remolque delantero y trasero seleccionados
  const [selectedTractocamion, setSelectedTractocamion] = useState(null);
  const [selectedRemolqueDelantero, setSelectedRemolqueDelantero] = useState(null);
  const [selectedRemolqueTrasero, setSelectedRemolqueTrasero] = useState(null);
  const [selectedDolly, setSelectedDolly] = useState(null);
  const [dollies, setDollies] = useState([]); // Estado para dollies

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [modalidad, setModalidad] = React.useState('sencillo'); // Estado para la modalidad

  const handleChangeModalidad = (event) => {
    setModalidad(event.target.value); // Actualiza la modalidad seleccionada
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita que se envíe el formulario de manera predeterminada
  
    const formData = new FormData(event.target);
    const data = {};
  
    // Convertir los datos del formulario en un objeto
    formData.forEach((value, key) => {
      data[key] = value;
    });
  
    let configuracion;
  
    if (modalidad === 'sencillo') {
      configuracion = {
        Modalidad: modalidad,
        Tractocamion: selectedTractocamion,
        RemolqueDelantero: selectedRemolqueDelantero
            };
    } else {
      configuracion = {
        Modalidad: modalidad,
        Tractocamion: selectedTractocamion,
        RemolqueDelantero: selectedRemolqueDelantero,
        RemolqueTrasero: selectedRemolqueTrasero,
        Dolly: selectedDolly
      };
    }
  
    if (modalidad === 'full' && selectedRemolqueDelantero === selectedRemolqueTrasero) {
      // Mostrar un mensaje de error si los remolques son iguales en modalidad 'full'
      alert('No puedes elegir el mismo remolque dos veces');
    } else {
      // Mostrar los datos en un mensaje de alerta junto con la configuración seleccionada
      if (window.confirm(`Confirmar configuración:\n\n${JSON.stringify(configuracion, null, 2)}\n\n¿Deseas continuar?`)) {
        // Realizar la solicitud POST aquí si el usuario hace clic en "Aceptar"
        try {
          const response = await fetch(apiUrl  + 'insertConfiguracion', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(configuracion),
          });
  
          if (response.ok) {
            alert('Configuración enviada correctamente');
            handleClose(); // Cierra el modal independientemente de la modalidad
          } else {
            alert('Hubo un error al enviar la configuración');
          }
        } catch (error) {
          alert('Hubo un error al enviar la configuración');
          console.error('Error al enviar la configuración:', error);
        }
      }
    }
  };


  // Función para obtener tractocamiones desde la API
  const fetchTractocamiones = async () => {
    try {
      const res = await fetch(apiUrl + 'getTractocamionesDisponibles');
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const tractocamionesData = await res.json();
      setTractocamiones(tractocamionesData);
    } catch (error) {
      console.error('Error fetching tractocamiones data:', error);
    }
  };

  // Función para obtener remolques desde la API
  const fetchRemolques = async () => {
    try {
      const res = await fetch(apiUrl + 'getRemolquesDisponibles');
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const remolquesData = await res.json();
      setRemolques(remolquesData);
    } catch (error) {
      console.error('Error fetching remolques data:', error);
    }
  };

  // Función para obtener dollies desde la API
  const fetchDollies = async () => {
    try {
      const res = await fetch(apiUrl + 'getDolliesDisponibles');
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const dolliesData = await res.json();
      setDollies(dolliesData);
    } catch (error) {
      console.error('Error fetching dollies data:', error);
    }
  };

  // Llamar a las funciones para obtener los datos cuando se monte el componente
  useEffect(() => {
    fetchTractocamiones();
    fetchRemolques();
    fetchDollies();
  }, []);

  return (
    <div>
      <Button onClick={handleOpen}>Crear Nueva Configuración.</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={handleSubmit}> 
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Crear una Configuración Nueva. <br></br>  <br></br>
          </Typography>
          <FormControl fullWidth>
            
            <InputLabel id="modalidad-label">Modalidad</InputLabel>
            <Select
              labelId="modalidad-label"
              id="modalidad-select"
              value={modalidad}
              sx={{ width: 320 }}
              label="Modalidad"
              onChange={handleChangeModalidad}
            >
              <MenuItem value="sencillo">Sencillo</MenuItem>
              <MenuItem value="full">Full</MenuItem>
            </Select><br></br>
          </FormControl>

          {modalidad === 'sencillo' ? (
            <>


  <Autocomplete
  disablePortal
  id="tractocamionesAutoCompleteSencillo"
  value={selectedTractocamion}
  options={tractocamiones.map(item => item.clave)}
  sx={{ width: 320 }}
  onChange={(event, newValue) => {
    setSelectedTractocamion(newValue);
  }}
  renderInput={(params) => (
  <TextField {...params} label="Tractocamión" required/>
  )}
/><br></br>



              <Autocomplete
                disablePortal
                id="remolquedelanteroAutoComplete"
                value={selectedRemolqueDelantero}
                onChange={(event, newValue) => setSelectedRemolqueDelantero(newValue)}
                options={remolques
                  .filter(item => item.clave !== tractocamiones[0]?.clave) // Filtrar remolques que no son iguales al tractocamión
                  .map(item => item.clave)}
                sx={{ width: 320 }}
                renderInput={(params) => (
                  <TextField {...params} label="Remolque 1" required/>
                )}
              /><br></br>
            </>
          ) : (
            <>


<Autocomplete
  disablePortal
  id="tractocamionesAutoCompleteFull"
  value = {selectedTractocamion}
  options={tractocamiones.map(item => item.clave)}
  sx={{ width: 320 }}
  onChange={(event, newValue) => {
    setSelectedTractocamion(newValue);
  }}
  renderInput={(params) => (
    <TextField {...params} label="Tractocamión" required/>
  )}
/><br></br>


              <Autocomplete
                disablePortal
                id="remolquedelanteroAutoComplete"
                value={selectedRemolqueDelantero}
                onChange={(event, newValue) => setSelectedRemolqueDelantero(newValue)}
                options={remolques
                  .filter(item => item.clave !== tractocamiones[0]?.clave) // Filtrar remolques que no son iguales al tractocamión
                  .map(item => item.clave)}
                sx={{ width: 320 }}
                renderInput={(params) => (
                  <TextField {...params} label="Remolque 1" required />
                )}
              /><br></br>


<Autocomplete
  disablePortal
  id="dolliesAutoComplete"
  value = {selectedDolly}
  options={dollies.map(item => item.clave)}
  sx={{ width: 320 }}
  onChange={(event, newValue) => {
    setSelectedDolly(newValue);
  }}
  renderInput={(params) => (
    <TextField {...params} label="Dolly" required/>
  )}
/><br></br>


              <Autocomplete
                disablePortal
                id="remolquetraseroAutoCompleteFull"
                value={selectedRemolqueTrasero}
                onChange={(event, newValue) => setSelectedRemolqueTrasero(newValue)}
                options={remolques
                  .filter(item => item.clave !== tractocamiones[0]?.clave) // Filtrar remolques que no son iguales al tractocamión
                  .map(item => item.clave)}
                sx={{ width: 320 }}
                renderInput={(params) => (
                  <TextField {...params} label="Remolque 2" required/>
                )}
              /><br></br>
            </>
          )}

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Solo Podras Crear una Configuración a la vez.
          </Typography>

          <button
  type="submit"
 // disabled={!isSubmitButtonVisible()}
  variant="contained"
  color="primary"
>
  Enviar
</button>

        </Box>
         </form>
      </Modal>
    </div>
  );
}
