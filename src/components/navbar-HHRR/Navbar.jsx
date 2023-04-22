import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.png"
import Photo from "../../assets/images/image.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import "../navbar-HHRR/navbar.css";

const Navbar =({user}) => {
  const [data, setData] = useState({})
  
  useEffect(()=> setData(user),[user])


  const handleLogout = () => {
    // Redirige al usuario a la página de inicio
    window.location.href = ("/")
  }

  return (
    <div className="content-navbar">
      <img src={Logo} alt="logo" className="logo"/>
      <img src={data.photo ? data.photo : Photo} alt="user" className="user"/>
      <div className="buttons">
      <a href="/" className="btn">Home</a>
        <a href="register" className="btn">Registro</a>
        <a href="listWorkers" className="btn">Trabajadores</a>
        <FontAwesomeIcon className="icon-off" icon={faPowerOff} onClick={handleLogout} />
      </div>
    </div>
  );
}

export default Navbar;

