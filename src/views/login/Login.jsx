import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api/axios';
import jwtDecode from 'jwt-decode';
import '../login/login.css';
import 'animate.css';


const LOGIN_URL = '/api/login_check';


function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false) // Nuevo estado para controlar si se está cargando o no
    const [showAlert, setShowAlert] = useState(false); // Nuevo estado para mostrar alerta


    const handleAlertClose = () => {
      setShowAlert(false);
      setUsername('')
      setPassword('')
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      if (!username || !password) {
        return;
      }
    setIsLoading(true);// Marcamos que se está cargando
        try{
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({username: username, password: password}),
                    {
                        headers:{'content-Type' : 'application/json'},
                        withCredentials: true
                    }
            );

            const accessToken = response.data.token;
            const token = { accessToken: accessToken };
            console.log(accessToken);
            
            const storedToken = window.localStorage.setItem(
                'loggedAppUser', accessToken
            );

            console.log(storedToken)

            const auth_username = { username: username }
            const stored_username = window.localStorage.setItem(
                'name', JSON.stringify(auth_username)
            );
            console.log(stored_username)

            const decoded_token = jwtDecode(accessToken)
            console.log(decoded_token);

            const decoded_role = decoded_token.roles
            console.log(decoded_role)

           // const userRole = { role: decoded_role }
            const stored_roles = window.localStorage.setItem(
                'role', decoded_role
            )

            setUsername('')
            setPassword('')
            setSuccess(true)
            setIsLoading(false) // Finaliza la carga
            

		setTimeout(()=>{
      if (decoded_role == 'ROLE_USER') {
        window.location.href = '/homeResponsible'
      } else{
        window.location.href = '/home'
      } 
      },1000)           

        } catch (err) {
          setShowAlert(true); // Mostrar alerta si hay error
          setIsLoading(false) // Finaliza la carga
        }
    };

    
  return (
    <div className="login-container">
      <>
      {showAlert && ( // Mostrar alerta solo si showAlert es verdadero
          <div id="custom-alert" className="alert">
            <div className="alert-content animate__animated animate__shakeX">
              <span className="close" onClick={handleAlertClose}>
                &times;
              </span>
              <p className='alert-text'>Datos incorrectos</p>
            </div>
          </div>
        )}
        {success ? (
          <section className="success">
            <h2 className='login-tex'>¡Has iniciado sesión!</h2>
          </section>
        ) : (
          <section className='title-and-formLogin'>
            <h1 className="title-login">Plataforma de Login</h1>
            <div className="form-login">
              <form onSubmit={handleSubmit}>
                <label htmlFor="usernameLogin">Correo Corporativo</label>
                <input name="login"
                  type="text"
                  id="username"
                  autoComplete="off"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  required
                />
                <label htmlFor="passwordLogin">Contraseña</label>
                <input name="login"
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                {/* Agregamos la condición para mostrar el mensaje de cargando */}
                {isLoading ? (
                  <button className="btn-in" type="submit" disabled>Cargando...</button>
                ) : (
                  <button className="btn-in" type="submit">Entrar</button>
                )}
              </form>
              <p>¿Aún no estás registrado? <Link className="btn-register" to="/registerUser">Regístrate</Link></p>
              {/* <a href="#" className="btn-password">
                Recuperar Contraseña
              </a> */}
            </div>
          </section>
        )}
      </>
    </div>
  );
};

export default Login;