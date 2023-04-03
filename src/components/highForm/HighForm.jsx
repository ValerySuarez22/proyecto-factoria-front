import React from 'react';
import '../../components/highForm/highForm.css';

function HighForm() {
  return (
    <div className='form-container'>
      <form className='high-form'>
      <h2>Alta de los datos del trabajador</h2>
        <ul className='high-form-list'>
          <div className='form-left'>
            <li>
              <label htmlFor="name"></label>
              <input type="text" id="name" name="user_name" placeholder="Nombre completo"></input>
            </li>
            <li>
              <label htmlFor="dni"></label>
              <input type="text" id="dni" name="user_dni" placeholder="DNI"></input>
            </li>
            <li>
              <label htmlFor="email"></label>
              <input type="email" id="email" name="user_email" placeholder="Email"></input>
            </li>
            <li>
              <label htmlFor="rol"></label>
              <input type="text" id="rol" name="user_rol" placeholder="Rol"></input>
            </li>
            <li>
              <label htmlFor="cargo"></label>
              <input type="text" id="cargo" name="user_cargo" placeholder="Cargo"></input>
            </li>
            <li>
              <label htmlFor="area"></label>
              <input type="text" id="area" name="user_area" placeholder="Área"></input>
            </li>
          </div>

          <div className='form-right'>
            <li>
              <label htmlFor="escuela"></label>
              <input type="text" id="escuela" name="user_escuela" placeholder="Ubicación de la Escuela"></input>
            </li>
            <li>
              <label htmlFor="responsable"></label>
              <input type="text" id="responsable" name="user_responsable" placeholder="Nombre completo del Responsable a cargo"></input>
            </li>
            <li>
              <label htmlFor="contrato"></label>
              <input type="text" id="contrato" name="user_contrato" placeholder="Tipo de contrato"></input>
            </li>
            <li>
              <label htmlFor="inicio">Fecha de inicio:</label>
              <input type="date" id="inicio" name="user_inicio" placeholder="Por favor, ingrese la fecha de inicio"></input>
            </li>
            <li>
              <label htmlFor="fin">Fecha de fin:</label>
              <input type="date" id="fin" name="user_fin" placeholder="Por favor, ingrese la fecha de fin"></input>
            </li>
          </div>
        </ul>
        <button type="submit">Guardar datos</button>
      </form>
    </div>
  );
}

export default HighForm;
