import React, { useState } from 'react';

const PasswordProtection = () => {
  const [password, setPassword] = useState('');
  const correctPassword = 'tu_contraseña_aqui'; // Reemplaza esto con tu contraseña

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === correctPassword) {
      // Contraseña correcta, redireccionar a la aplicación principal
      window.location.href = '/tu-ruta-de-app';
    } else {
      alert('Contraseña incorrecta');
    }
  };

  return (
    <div>
      <h2>Ingresa la contraseña</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default PasswordProtection;