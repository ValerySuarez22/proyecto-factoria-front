import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../src/views/humanResources/homeRRHH/Home";
import Register from "../../src/views/humanResources/register/Register";
import Evaluations from "../views/humanResources/evaluations/Evaluations";
import ListWorkers from "../views/humanResources/workersPP/ListWorkers";
import ListEmployees from "../views/responsibe/list/ListEmployees";
import HomeResponsibe from "../../src/views/responsibe/homeR/HomeResponsibe";
import Login from "../views/login/Login";


const Router = () => {
   const userRole = window.localStorage.getItem('role')


   if (userRole == ['ROLE_ADMIN', 'ROLE_USER']) {
      return (
         <BrowserRouter>
            <Routes>
               <Route path="/home" element={<Home />} />
               <Route path="/register" element={<Register />} />
               <Route path="/evaluations" element={<Evaluations />} />
               <Route path="/listWorkers" element={<ListWorkers />} />
            </Routes>
         </BrowserRouter>
      )

   } else if (userRole == 'ROLE_USER') {
      return (
         <BrowserRouter>
            <Routes>
               <Route path="/homeResponsibe" element={<HomeResponsibe />} />
               <Route path="/listEmployees" element={<ListEmployees />} />
            </Routes>
         </BrowserRouter>
      )
   } else{
      return (
         <BrowserRouter>
         <Routes>
               <Route path="/" element={<Login />} />
         </Routes>
         </BrowserRouter>
      )
         
            
               
   }
};

export default Router;
