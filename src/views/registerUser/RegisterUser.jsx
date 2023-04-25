import React, { useState } from "react";
import axios from "../api/axios";
import "../registerUser/registerUser.css";

const REGISTER_URL = "/api/register";

function RegisterUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        REGISTER_URL,
        {
          username: username,
          password: password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(response.data);
      setSuccess(true);
      setIsLoading(false);
    } catch {
      setIsLoading(false)
    }
  };

  return (
    <div id="/registerUser" className="register-container">
      <>
        {success ? (
          <section className="success">
            <h2 className='register-tex'>¡Te has registrado correctamente!</h2>
            <a href="/" className="btn-login">
              Ahora ya puedes iniciar sesión
            </a>
          </section>
        ) : (
          <section className="title-and-formRegister">
            <h1 className="title-register">Plataforma de Registro</h1>
            <div className="form-register">
              <form onSubmit={handleSubmit}>
                <label htmlFor="username">Correo Corporativo</label>
                <input name="register"
                  type="text"
                  id="username"
                  autoComplete="off"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  required
                />

                <label htmlFor="password">Elige una Contraseña</label>
                <input name="register"
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                {isLoading ? (
                  <button className="btn-in" type="submit" disabled>Cargando...</button>
                ) : (
                  <button className="btn-in">Registrarse</button>
                )}
              </form>
            </div>
          </section>
        )}
      </>
    </div>
  );
}

export default RegisterUser;
