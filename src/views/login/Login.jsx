import React from 'react';
import PropTypes from 'prop-types';
import "../../views/login/login.css";

function Login(props) {
  return (
    <div className='container-login'>
        <div className="login-page">
            <div className="login-form-container">
        <h2>Iniciar sesión</h2>
        <form onSubmit={props.onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <input type="text" id="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
     </div>
    </div>
    
  );
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Login;