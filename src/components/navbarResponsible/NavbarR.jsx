import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.png"
import Photo from "../../assets/images/defaultUser.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import '../navbarResponsible/navbarR.css';



const NavbarR = ({ user }) => {
  const [data, setData] = useState({})

  useEffect(() => setData(user), [user])

  const handleLogout = () => {
    // Redirige al usuario a la página de inicio
    window.location.href = ("/")
  }

  return (
    <div className="content-navbarR">
      <img src={Logo} alt="logo" className="logoR" />
      <img src={data.photo ? data.photo : Photo} alt="user" className="userR" />
      <div className="buttonsR">
        <a href="/homeResponsible" className="btnR">Home</a>
        <a href="listEmployees" className="btnR">Trabajadores</a>
        {/* <a href="tracking" className="btn">Evaluaciones</a> */}
        <FontAwesomeIcon className="iconR-off" icon={faPowerOff} onClick={handleLogout} />
      </div>
    </div>
  )
}

export default NavbarR
