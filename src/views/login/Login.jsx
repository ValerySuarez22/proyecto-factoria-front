import React, { useState } from 'react';
import axios from '../api/axios';
import jwtDecode from 'jwt-decode';
import '../login/login.css';


const LOGIN_URL = '/api/login_check';

const  Login= ()=> {

    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);

        const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ username: username, password: password }),
                {
                    headers: { 'Content-Type' : 'application/json' },
                    withCredentials: true
                }
            );

            const accessToken = response.data.token;
            const user = { username: username };
            const userToken = { accessToken: accessToken };


           const decodedToken = jwtDecode(accessToken);

            //console.log(decodedToken)

            const userRole = decodedToken.roles;
            console.log(userRole)

            window.localStorage.setItem(
                'loggedAppUser', JSON.stringify(user)
            )

            window.localStorage.setItem(
                'auth_token', accessToken
            )

            window.localStorage.setItem(
                'auth_role', userRole
            )

            //console.log(storedToken)
            //console.log(storedUsername)

            if (userRole == 'ROLE_USER'){
                console.log('is User')
            } else {
                console.log('its none')
            }


            setUsername('');
            setPassword('');
            setSuccess(true);

            console.log('hecho!')

            setTimeout(()=>{
              window.location.href = '/home'
            },1500)


        } catch (err) {
          //tengo que hacer que muestre un mensaje de no autorizado
            console.log('no funciona')
        }
    }

  return (
    <div className="login-container">
      <>
        {success ? (
          <section className="success">
            <h2 className='login-tex'>¡Has iniciado sesión!</h2>
            {/* <a href="https://elpais.com/" className="btn-login">
              Ve al inicio
            </a> */}
          </section>
        ) : (
          <section>
            <h1 className="title-login">Plataforma de Login</h1>
            <div className="form-login">
              <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input name="login"
                  type="text"
                  id="username"
                  autoComplete="off"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  required
                />
                <label htmlFor="password">Contraseña</label>
                <input name="login"
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                <button className="btn-in" type="submit">Entrar</button>
              </form>

              <a href="https://elpais.com/" className="btn-password">
                Recuperar Contraseña
              </a>
            </div>
          </section>
        )}
      </>
    </div>
  );
};

export default Login;
