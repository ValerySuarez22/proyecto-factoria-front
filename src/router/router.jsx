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
         <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/evaluations" element={<Evaluations/>} />
            <Route path="/listWorkers" element={<ListWorkers/>} />
         </Routes>
         
         {/* <Routes>
            <Route path="/" element={<HomeResponsibe/>} />
            <Route path="/listEmployees" element={<ListEmployees/>} />
         </Routes>  */}

      </BrowserRouter>
   );
};

export default Router;
