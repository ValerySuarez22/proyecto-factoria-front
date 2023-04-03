import React from "react";
import Logo from "../../assets/images/logo.png"
import "../navbar/navbar.css";

function Navbar() {

  return (
    <div className="content-navbar">
      <img src={Logo} alt="logo" className="logo" />
      <div className="buttons">
        <a href="#" className="btn">Home</a>
        <a href="#" className="btn">About</a>
        <a href="#" className="btn">Services</a>
        <a href="#" className="btn">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;

