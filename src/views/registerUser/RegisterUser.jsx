import React, { useState } from "react";
import axios from "../api/axios";
import "../registerUser/registerUser.css";

const REGISTER_URL = "/api/register";

function RegisterUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()

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

      setSuccess(true)

    } catch {

      console.log("no funciona");

    }
  };

  return (
    <div className="register-container">
      <>
        {success ? (
          <section className="success">
            <h2 className='register-tex'>¡Ya te has registrado!</h2>
            <a href="https://elpais.com/" className="btn-login">
              Ve al inicio
            </a>
          </section>
        ) : (
          <section>
            <h1 className="title-register">Plataforma de Registro</h1>
            <div className="form-register">
              <form onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>
                <input name="register"
                  type="text"
                  id="username"
                  autoComplete="off"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  required
                />

                <label htmlFor="password">Contraseña</label>
                <input name="register"
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                <button className="btn-in">Registrarse</button>
              </form>
            </div>
          </section>
        )}
      </>
    </div>
  );
}

export default RegisterUser;
