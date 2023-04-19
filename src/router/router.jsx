import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../src/views/humanResources/homeRRHH/Home";
import Register from "../../src/views/humanResources/register/Register";
import Evaluations from "../views/humanResources/evaluations/Evaluations";
import ListWorkers from "../views/humanResources/workersPP/ListWorkers";
import ListEmployees from "../views/responsibe/List/ListEmployees";
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
            <Route path="/listEmployees" element={<listEmployees/>} />
         </Routes> */}

      </BrowserRouter>
   );
};

export default Router;
