import React from 'react'

function navbarW() {
  return (
    <div className="content-navbar">
      <img src={Logo} alt="logo" className="logo"/>
      <img src={User} alt="user" className="user"/>
      <div className="buttons">
        <a href="/" className="btn">Home</a>
        <a href="register" className="btn">Evaluaciones</a>
        <a href="TeamsArea" className="btn">Ajustes</a>
        <FontAwesomeIcon  className="icon-off" icon={faPowerOff}/>
      </div>
    </div>
  )
}

export default navbarW
