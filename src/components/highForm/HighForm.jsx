import React, { useEffect, useState } from "react";
import axios from "axios";
<<<<<<< HEAD
import Logo from "../../assets/images/image_1.png"
=======
import Logo from "../../assets/images/logo.png";
>>>>>>> origin/unificar
import "./highForm.css";

const HighForm = () => {
  const [areas, setAreas] = useState([])
  const [contracts, setContracts] = useState([]);
  const [positions, setPositions] = useState([]);
  const [rols, setRols] = useState([]);
  const [status, setStatus] = useState([]);
  const [teams, setTeams] = useState([]);
<<<<<<< HEAD
  const [formValues, setFormValues] = useState({});
  const [imagen, setImagen] = useState(null);
  const [pictu, setPictu] = useState(Logo);
=======
  const [period, setPeriods] = useState([]);
  const [formValues, setFormValues] = useState([]);
  const [managers, setManagers] = useState([]);
  const [imagen, setImagen] = useState(null);
  
>>>>>>> origin/unificar
  
  useEffect(() => {
    // Nos traemos el listado de areas
    try {
      axios.get("http://127.0.0.1:8000/area/list")
      .then(res => {
        setAreas(res.data)
      })
      axios.get("http://127.0.0.1:8000/contract/list")
      .then(res => {
        setContracts(res.data)
      })
      axios.get("http://127.0.0.1:8000/position/list")
      .then(res => {
        setPositions(res.data)
      })
      axios.get("http://127.0.0.1:8000/rol/list")
      .then(res => {
        setRols(res.data)
      })
      axios.get("http://127.0.0.1:8000/status/list")
      .then(res => {
        setStatus(res.data)
      })
      axios.get("http://127.0.0.1:8000/team/list")
      .then(res => {
        setTeams(res.data)
      })
<<<<<<< HEAD
=======
      axios.get("http://127.0.0.1:8000/period/list")
      .then(res => {
        setPeriods(res.data)
      })
      axios.get("http://127.0.0.1:8000/manager/list")
      .then(res => {
        setManagers(res.data)
      })
>>>>>>> origin/unificar
    } catch (error) {
      console.log("🚀 ~ file: HighForm.jsx:20 ~ useEffect ~ error:", error)
      
    }
    // .then(res => res)
    // await request("listAreas")
  },[])


  const handleImageSelected = (event) => {
    const picture = event.target.files[0];
    if (picture && (picture.type === "image/png" || picture.type === "image/jpeg")) {
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
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(imagen);
    console.log(formValues);
    const data = new FormData();

    data.append("photo", imagen);
    data.append('data', JSON.stringify(formValues));
<<<<<<< HEAD
    const res = await axios.post("http://127.0.0.1:8000/api/create/employee", data, {
=======
    await axios.post("http://127.0.0.1:8000/api/create/employee", data, {
>>>>>>> origin/unificar
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    // console.log("este es el id del nuevo usuario: ", res);
    // axios.get(`http://127.0.0.1:8000/api/employee/${res.data}/photo`, { responseType: 'blob' })
    // .then((res) => {
    // console.log("🚀 ~ file: HighForm.jsx:119 ~ .then ~ res:", res)
    //   const reader = new FileReader();
    //   reader.readAsDataURL(res.data);
    //   reader.onloadend = () => {
    //     setPictu(reader.result);

    //   // rese.data.blob()
    //   }
    // })
    // .then((blob) => {
    //   };
    // });
  };
  

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="high-form">
<<<<<<< HEAD
        <img src={pictu} alt="logo111" />
=======
        <img src={Logo} alt="logo111" />
>>>>>>> origin/unificar
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
                {areas.map((data, index) => 
                  <option value={data.id}>{data.title}</option>
                )}
              </select>
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
                {teams.map((data, index) => 
                <option value={data.id}>{data.title}</option>
                )}
              </select>
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
                {contracts.map((data,index) =>
                <option value={data.id}>{data.title}</option>
                )}
              </select>
            </li>
            <li>
<<<<<<< HEAD
=======
              <label htmlFor="period">Periodo</label>
              <select
                id="period"
                name="period"
                value={formValues.period}
                onChange={handleInputChange}
              >
                <option value=""></option> 
                {period.map((data,index) =>
                <option value={data.id}>{data.title}</option>
                )}
              </select>
            </li>
            <li>
              <label htmlFor="manager">Responsable</label>
              <select
                id="manager"
                name="manager"
                value={formValues.manager}
                onChange={handleInputChange}
              >
                <option value=""></option>
                {managers.map((data, index) => 
                <option value={data.id}>{data.title}</option>
                )}
              </select>
            </li>
            <li>
>>>>>>> origin/unificar
              <label htmlFor="inicio">Fecha de inicio</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formValues.startDate}
                placeholder="Fecha de inicio"
                onChange={handleInputChange}
              />
            </li>
            <li>
<<<<<<< HEAD
              <label htmlFor="manager">Responsable</label>
              <input
                type="text"
                id="manager"
                name="manager"
                value={formValues.manager}
                placeholder="Nombre del responsable"
=======
              <label htmlFor="inicio">Fecha fin</label>
              <input
                type="date"
                id="finishDate"
                name="finishDate"
                value={formValues.finishDate}
                placeholder="Fecha fin"
                onChange={handleInputChange}
              />
            </li>
            <li>
              <label htmlFor="inicio">Primer Periodo</label>
              <input
                type="date"
                id="firstPeriod"
                name="firstPeriod"
                value={formValues.firstPeriod}
                placeholder="Primer Periodo"
>>>>>>> origin/unificar
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
                {rols.map((data, index) => 
                <option value={data.id}>{data.title}</option>
                )}
              </select>
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
                {positions.map((data, index) => 
                  <option value={data.id}>{data.title}</option>
                )}
              </select>
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
                {status.map((data, index) => 
                  <option value={data.id}>{data.title}</option>
                )}
              </select>
            </li>
            <li>
<<<<<<< HEAD
              <label htmlFor="inicio">Fecha fin</label>
              <input
                type="date"
                id="finishDate"
                name="finishDate"
                value={formValues.finishDate}
                placeholder="Fecha fin"
=======
              <label htmlFor="inicio">Segundo Periodo</label>
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
              <label htmlFor="inicio">Tercer Periodo</label>
              <input
                type="date"
                id="thirdPeriod"
                name="thirdtPeriod"
                value={formValues.thirdPeriod}
                placeholder="Tercer Periodo"
                onChange={handleInputChange}
              />
            </li>
            <li>
              <label htmlFor="inicio">Cuarto Periodo</label>
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
              <label htmlFor="inicio">Quinto Periodo</label>
              <input
                type="date"
                id="fifthPeriod"
                name="fifthPeriod"
                value={formValues.fifthPeriod}
                placeholder="Quinto Periodo"
>>>>>>> origin/unificar
                onChange={handleInputChange}
              />
            </li>
            <li>
              <label htmlFor="imagen">
                Foto del empleado
              </label>
              <input
                type="file"
                id="imagen"
                name="imagen"
                accept="image/png, image/jpeg"
                onChange={handleImageSelected} //Estos es una función que se ejecuta cuando recibe un cambio
              />
            </li>
          </div>
        </ul>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default HighForm;