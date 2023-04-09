import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "../../views/login/login.css";

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
      <div className='form-container'>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Usuario:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label>Contraseña:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
    
  );
}

export default Login;
// function Login(props) {
//   return (
//     <div className='container-login'>
//         <div className="login-page">
//             <div className="login-form-container">
//         <h2>Iniciar sesión</h2>
//         <form onSubmit={props.onSubmit}>
//           <div className="form-group">
//             <label htmlFor="username">Usuario</label>
//             <input type="text" id="username" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Contraseña</label>
//             <input type="password" id="password" />
//           </div>
//           <button type="submit">Iniciar sesión</button>
//         </form>
//       </div>
//      </div>
//     </div>
    
//   );
// }

// Login.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// export default Login;
