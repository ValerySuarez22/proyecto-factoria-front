import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Logo from "../../assets/images/logo.png";
import "./highForm.css";

const HighForm = () => {
  const [areas, setAreas] = useState([]);
  const [contracts, setContracts] = useState([]);
  const [positions, setPositions] = useState([]);
  const [rols, setRols] = useState([]);
  const [status, setStatus] = useState([]);
  const [teams, setTeams] = useState([]);
  const [period, setPeriods] = useState([]);
  const [formValues, setFormValues] = useState([]);
  const [managers, setManagers] = useState([]);
  const [imagen, setImagen] = useState(null);

  useEffect(() => {
    // Nos traemos el listado de areas
    try {
      axios.get("http://127.0.0.1:8000/area/list").then((res) => {
        setAreas(res.data);
      });
      axios.get("http://127.0.0.1:8000/contract/list").then((res) => {
        setContracts(res.data);
      });
      axios.get("http://127.0.0.1:8000/position/list").then((res) => {
        setPositions(res.data);
      });
      axios.get("http://127.0.0.1:8000/rol/list").then((res) => {
        setRols(res.data);
      });
      axios.get("http://127.0.0.1:8000/status/list").then((res) => {
        setStatus(res.data);
      });
      axios.get("http://127.0.0.1:8000/team/list").then((res) => {
        setTeams(res.data);
      });
      axios.get("http://127.0.0.1:8000/period/list").then((res) => {
        setPeriods(res.data);
      });
      axios.get("http://127.0.0.1:8000/manager/list").then((res) => {
        setManagers(res.data);
      });
    } catch (error) {
      console.log("🚀 ~ file: HighForm.jsx:20 ~ useEffect ~ error:", error);
    }
    // .then(res => res)
    // await request("listAreas")
  }, []);


  const handleImageSelected = (event) => {
    const picture = event.target.files[0];
    if (
      picture &&
      (picture.type === "image/png" || picture.type === "image/jpeg")
    ) {
      setImagen(picture);
    } else {
      setImagen(null);
      alert("Seleccione una imagen en formato PNG o JPEG.");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateForm = () => {
    const requiredFields = [
      'name',
      'lastname',
      'identifying',
      'position',
      'area',
      'typeOfContract',
      'manager',
      'startDate',      
      'email',
      'rol',
      'team',
      'period',
      'status',
      'finishDate',
      'imagen',
    ];
    let isValid = true;

    requiredFields.forEach(fieldName => {
      const field = document.getElementById(fieldName);
      const errorElement = field.parentElement.querySelector('.error');
      if (!formValues[fieldName]) {
        errorElement.textContent = `El campo ${fieldName} es obligatorio`;
        isValid = false;
      } else if (fieldName === 'email' && !/\S+@\S+\.\S+/.test(formValues[fieldName])) {
        errorElement.textContent = 'El correo electrónico no es válido';
        isValid = false;
      } else if (fieldName === 'identifying' && !/^\d{8}[A-Z]$/.test(formValues[fieldName])) {
        errorElement.textContent = 'El número de identificación no es válido';
        isValid = false;
      } else {
        errorElement.textContent = '';
      }
    });
  
    return isValid;
  };

  const [enviado, setEnviado] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      return;
    }

    const token = localStorage.getItem('loggedAppUser')
    
    if (!formValues.firstPeriod) formValues.firstPeriod = ""
    if (!formValues.secondPeriod) formValues.secondPeriod = ""
    if (!formValues.thirdPeriod) formValues.thirdPeriod = ""
    if (!formValues.fourthPeriod) formValues.fourthPeriod = ""
    if (!formValues.fifthPeriod) formValues.fifthPeriod = ""

    const data = new FormData();
    data.append("photo", imagen);
    data.append('data', JSON.stringify(formValues));
    await axios.post("http://127.0.0.1:8000/api/employee/new", data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        // 'Authorization': `Bearer ${token}`,
      },
    })
    setFormValues([])
    setImagen(null)
    setEnviado(true);
  };

  return (
    <div className="form-container">
      {enviado ? (
        <Fragment>
          <p className="alert">Los datos se han enviado correctamente.</p>
         <button className="btn-alert-form" onClick={() => window.location.reload()}>Volver</button>
        </Fragment>
       
      ) : (
      <form onSubmit={handleSubmit} className="high-form">
      <h1 className="title-r">Resgisto de empleados en periodo de prueba</h1> 
        <ul className="high-form-list">
          <div className="form-left">
            <li>
              <label htmlFor="name">Nombre</label>
              <input 
                type="text"
                id="name"
                name="name"
                value={formValues.name}
                placeholder="Nombre completo"
                onChange={handleInputChange}
              />
              <span className="error"></span>
            </li>

            <li>
              <label htmlFor="identifying">DNI</label>
              <input 
                type="text"
                id="identifying"
                name="identifying"
                value={formValues.identifying}
                placeholder="DNI"
                onChange={handleInputChange}
              />
              <span className="error"></span>
            </li>

            <li>
              <label htmlFor="position">Cargo</label>
              <select 
                id="position"
                name="position"
                value={formValues.title}
                onChange={handleInputChange}
                >
                <option value=""></option>
                {positions.map((data, index) => (
                  <option value={data.id}>{data.title}</option>
                ))}
              </select>
              <span className="error"></span>
            </li>

            <li>
              <label htmlFor="area">Area</label>
              <select 
                id="area"
                name="area"
                value={formValues.area}
                onChange={handleInputChange}
              >
                <option value=""></option>
                {areas.map((data, index) => (
                  <option value={data.id}>{data.title}</option>
                ))}
              </select>
              <span className="error"></span>
            </li>

            <li>
              <label htmlFor="typeOfContract">Tipo de contrato</label>
              <select 
                id="typeOfContract"
                name="typeOfContract"
                value={formValues.contract}
                onChange={handleInputChange}
              >
                <option value=""></option>
                {contracts.map((data, index) => (
                  <option value={data.id}>{data.title}</option>
                ))}
              </select>
              <span className="error"></span>
            </li>

            <li>
              <label htmlFor="manager">Responsable</label>
              <select 
                id="manager"
                name="manager"
                onChange={handleInputChange}                
              >
                <option value=""></option>
                {managers.map((data, index) => (
                  <option value={data.id}>{data.title}</option>
                ))}
              </select>
              <span className="error"></span>
            </li>

            <li>
              <label htmlFor="inicio">Fecha de inicio</label>
              <input 
                type="date"
                id="startDate"
                name="startDate"
                value={formValues.startDate}
                placeholder="Fecha de inicio"
                onChange={handleInputChange}              
              />
              <span className="error"></span>
            </li>

            <li>
              <label htmlFor="inicio">Primer Seguimiento</label>
              <input 
                type="date"
                id="firstPeriod"
                name="firstPeriod"
                value={formValues.firstPeriod}
                placeholder="Primer Periodo"
                onChange={handleInputChange}
              />
            </li>

            <li>
              <label htmlFor="inicio">Tercer Seguimiento</label>
              <input 
                type="date"
                id="thirdPeriod"
                name="thirdPeriod"
                value={formValues.thirdPeriod}
                placeholder="Tercer Periodo"
                onChange={handleInputChange}
              />
            </li>

            <li>
              <label htmlFor="inicio">Quinto Seguimiento</label>
              <input 
                type="date"
                id="fifthPeriod"
                name="fifthPeriod"
                value={formValues.fifthPeriod}
                placeholder="Quinto Periodo"
                onChange={handleInputChange}
              />
            </li>
          </div>

          <div className="form-right">
            <li>
              <label htmlFor="lastname">Apellido</label>
              <input 
                type="text"
                id="lastname"
                name="lastname"
                value={formValues.lastname}
                placeholder="Apellido"
                onChange={handleInputChange}
              />
              <span className="error"></span>
            </li>

            <li>
              <label htmlFor="email">Email</label>
              <input 
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                placeholder="Email"
                onChange={handleInputChange}                
              />
              <span className="error"></span>
            </li>

            <li>
              <label htmlFor="rol">Rol</label>
              <select 
                id="rol"
                name="rol"
                value={formValues.title}
                onChange={handleInputChange}                
              >
                <option value=""></option>
                {rols.map((data, index) => (
                  <option value={data.id}>{data.title}</option>
                ))}
              </select>
              <span className="error"></span>
            </li>

            <li>
              <label htmlFor="team">Equipo</label>
              <select 
                id="team"
                name="team"
                value={formValues.title}
                onChange={handleInputChange}                
              >
                <option value=""></option>
                {teams.map((data, index) => (
                  <option value={data.id}>{data.title}</option>
                ))}
              </select>
              <span className="error"></span>
            </li>

            <li>
              <label htmlFor="period">Periodo</label>
              <select 
                id="period"
                name="period"
                value={formValues.period}
                onChange={handleInputChange}                
              >
                <option value=""></option>
                {period.map((data, index) => (
                  <option value={data.id}>{data.title}</option>
                ))}
              </select>
              <span className="error"></span>
            </li>

            <li>
              <label htmlFor="status">Estado del empleado</label>
              <select 
                id="status"
                name="status"
                value={formValues.title}
                onChange={handleInputChange}                
              >
                <option value=""></option>
                {status.map((data, index) => (
                  <option value={data.id}>{data.title}</option>
                ))}
              </select>
              <span className="error"></span>
            </li>

            <li>
              <label htmlFor="inicio">Fecha fin</label>
              <input 
                type="date"
                id="finishDate"
                name="finishDate"
                value={formValues.finishDate}
                placeholder="Fecha fin"
                onChange={handleInputChange}                
              />
              <span className="error"></span>
            </li>

            <li>
              <label htmlFor="inicio">Segundo Seguimiento</label>
              <input 
                type="date"
                id="secondPeriod"
                name="secondPeriod"
                value={formValues.secondPeriod}
                placeholder="Segundo Periodo"
                onChange={handleInputChange}
              />
            </li>

            <li>
              <label htmlFor="inicio">Cuarto Seguimiento</label>
              <input 
                type="date"
                id="fourthPeriod"
                name="fourthPeriod"
                value={formValues.fourthPeriod}
                placeholder="Cuarto Periodo"
                onChange={handleInputChange}
              />
            </li>

            <li>
              <label htmlFor="imagen">Foto del empleado</label>
              <input 
                type="file"
                id="imagen"
                name="imagen"
                accept="image/png, image/jpeg"
                onChange={handleImageSelected} //Estos es una función que se ejecuta cuando recibe un cambio
              />
              <span className="error"></span>
            </li>
          </div>
        </ul>
        <button className="btn-enviar" type="submit">Enviar</button>
      </form>
      )}
    </div>
  );
 
};

export default HighForm;
