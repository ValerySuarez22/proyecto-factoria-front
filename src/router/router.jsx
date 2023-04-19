<<<<<<< HEAD
// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "../../src/views/humanResources/homeRRHH/Home"
// import Register from "../../src/views/humanResources/register/Register"
// import TeamsArea from "../views/humanResources/teams/TeamsArea";
// import ListWorkers from "../views/humanResources/workersPP/ListWorkers";


// const Router = () => {
//    return (
//       <BrowserRouter>
//          <Routes>
//             <Route path="/" element={<Home/>} />
//             <Route path="/register" element={<Register/>} />
//             <Route path="/TeamsArea" element={<TeamsArea/>} />
//             <Route path="/listWorkers" element={<ListWorkers/>} />
//          </Routes>
//       </BrowserRouter>
//    );
// };

// export default Router
=======
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../src/views/humanResources/homeRRHH/Home";
import Register from "../../src/views/humanResources/register/Register";
import Evaluations from "../views/humanResources/evaluations/Evaluations";
import ListWorkers from "../views/humanResources/workersPP/ListWorkers";
import ListEmployees from "../views/responsibe/list/ListEmployees";
import HomeResponsibe from "../../src/views/responsibe/homeR/HomeResponsibe";
import Navbar from "../components/navbar-HHRR/Navbar";
import NavbarR from "../components/navbarResponsible/NavbarR";
import Login from "../views/login/Login";


const Router = () => {
   return (
      <BrowserRouter>
      <Navbar/>
         <Routes>
            <Route path="login" element={<Login/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/evaluations" element={<Evaluations/>} />
            <Route path="/listWorkers" element={<ListWorkers/>} />
         </Routes>
      {/* <NavbarR/>   
         <Routes>
            <Route path="/" element={<HomeResponsibe/>} />
            <Route path="/listEmployees" element={<ListEmployees/>} />
         </Routes> */}

      </BrowserRouter>
   );
};

export default Router;
>>>>>>> origin/unificar
