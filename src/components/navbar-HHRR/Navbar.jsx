import React from "react";
import Logo from "../../assets/images/logo.png"
import User from "../../assets/images/image.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import "../navbar-HHRR/navbar.css";

function Navbar() {

  return (
    <div className="content-navbar">
      <img src={Logo} alt="logo" className="logo"/>
      <img src={User} alt="user" className="user"/>
      <div className="buttons">
        <a href="/" className="btn">Home</a>
        <a href="register" className="btn">Registro</a>
        <a href="listWorkers" className="btn">Trabajadores</a>
        <a href="evaluations" className="btn">Evaluación</a>
        <FontAwesomeIcon  className="icon-off" icon={faPowerOff}/>
      </div>
    </div>
  );
}

export default Navbar;

