import React from "react";
import Logo from "../../assets/images/logo.png"
import "../navbar/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      
      <a href="#" className="navbar-link ">
        Home
      </a>
      <a href="#" className="navbar-link">
        About
      </a>
      <a href="#" className="navbar-link">
        Services
      </a>
      <div className="navbar-logo">
        <img className="logo" src={Logo} alt='logo'></img>
      </div>
      
    </nav>
  );
}

export default Navbar;





// function Navbar() {

//   return (
//     <div className="content-navbar">
//       <img src={Logo} alt="logo" className="logo" />
//       <div className="buttons">
//         <a href="#" className="btn">Home</a>
//         <a href="#" className="btn">About</a>
//         <a href="#" className="btn">Services</a>
//         <a href="#" className="btn">Contact</a>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

