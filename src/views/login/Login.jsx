import React, { useState } from 'react';
import axios from '../../api/axios';
import jwtDecode from 'jwt-decode';
import '../login/login.css';


const LOGIN_URL = '/api/login_check';


function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({username: username, password: password}),
                    {
                        headers:{'content-Type' : 'application/json'},
                        withCredentials: true
                    }
            )

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
            console.log(decoded_role[1])

           // const userRole = { role: decoded_role }
            const stored_roles = window.localStorage.setItem(
                'role', decoded_role
            )

            setUsername('')
            setPassword('')
            setSuccess(true)

            console.log('¡Milagro de Dios! ¡Estás dentro!')

		setTimeout(()=>{
                window.location.href = '/home'
            },1500)


        } catch (err) {
          //tengo que hacer que muestre un mensaje de no autorizado
          alert('Datos incorrectos')  
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
              <p>¿Aún no estás registrado? <a href="http://127.0.0.1:8000/register">Regístrate</a></p>
              <a href="#" className="btn-password">
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