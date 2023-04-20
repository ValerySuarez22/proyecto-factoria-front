import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.png"
import Photo from "../../assets/images/image.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import "../navbar-HHRR/navbar.css";

const Navbar =({user}) => {
  const [data, setData] = useState({})
  
  useEffect(()=> setData(user))
<<<<<<< HEAD
  
=======

  const handleLogout = () => {
    // Redirige al usuario a la página de inicio
    window.location.href = ("/")
  }

>>>>>>> 468842b553901086ec10073f4fde5f3bc156a307
  return (
    console.log('user', user),
    <div className="content-navbar">
      <img src={Logo} alt="logo" className="logo"/>
<<<<<<< HEAD
      <img src={data.Photo} alt="user" className="user"/>
=======
      <img src={data.photo ? data.photo : User} alt="user" className="user"/>
>>>>>>> 468842b553901086ec10073f4fde5f3bc156a307
      <div className="buttons">
        <a href="home" className="btn">Home</a>
        <a href="register" className="btn">Registro</a>
        <a href="listWorkers" className="btn">Trabajadores</a>
        <FontAwesomeIcon className="icon-off" icon={faPowerOff} onClick={handleLogout} />
      </div>
    </div>
  );
}

export default Navbar;

