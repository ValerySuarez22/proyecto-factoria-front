// import React from "react";
// import "../navbar/navbar.css";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <img className="logo" src="./assets/images/logo.png" alt="logo" />
//       </div>
//       <a href="#login" className="navbar-link">
//         Home
//       </a>
//       <a href="#" className="navbar-link">
//         About
//       </a>
//       <a href="#" className="navbar-link">
//         Services
//       </a>
//     </nav>
//   );
// }

// export default Navbar;

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

