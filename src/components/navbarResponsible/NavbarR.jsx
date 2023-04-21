import React from 'react'
import Logo from "../../assets/images/logo.png"
import User from "../../assets/images/image.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import '../navbarResponsible/navbarR.css';

const handleLogout = () => {
  // Redirige al usuario a la página de inicio
  window.location.href = ("/")
}

function NavbarR() {
  return (
    <div className="content-navbar">
      <img src={Logo} alt="logo" className="logo"/>
      <img src={User} alt="user" className="user"/>
      <div className="buttons">
        <a href="/" className="btn">Home</a>
        <a href="listEmployees" className="btn">Trabajadores</a>
        {/* <a href="tracking" className="btn">Evaluaciones</a> */}
        <FontAwesomeIcon className="icon-off" icon={faPowerOff} onClick={handleLogout} />
      </div>
    </div>
  )
}

export default NavbarR
