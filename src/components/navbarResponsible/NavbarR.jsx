import React from 'react'

function NavbarR() {
  return (
    <div className="content-navbar">
      <img src={Logo} alt="logo" className="logo"/>
      <img src={User} alt="user" className="user"/>
      <div className="buttons">
        <a href="/" className="btn">Home</a>
        <a href="register" className="btn">Trabajadores</a>
        <a href="TeamsArea" className="btn">Evaluaciones</a>
        <FontAwesomeIcon  className="icon-off" icon={faPowerOff}/>
      </div>
    </div>
  )
}

export default NavbarR
