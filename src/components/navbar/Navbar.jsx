import React from "react";
import "../navbar/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img className="logo" src="./assets/images/logo.png" alt="logo" />
      </div>
      <a href="#login" className="navbar-link">
        Home
      </a>
      <a href="#" className="navbar-link">
        About
      </a>
      <a href="#" className="navbar-link">
        Services
      </a>
    </nav>
  );
}

export default Navbar;
