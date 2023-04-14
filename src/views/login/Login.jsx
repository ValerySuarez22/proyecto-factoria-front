import React, { useState } from 'react';
import '../login/login.css'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se puede añadir la lógica de inicio de sesión
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
  }


  return (
    <div className='login-container'>
      <div className='form-login'>
        <h2 className='title-login'>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label name="login">Usuario:</label>
            <input name="login" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label name="login">Contraseña:</label>
            <input name="login" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}

export default Login;