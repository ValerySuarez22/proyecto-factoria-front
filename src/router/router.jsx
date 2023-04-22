import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../src/views/humanResources/homeRRHH/Home";
import Register from "../../src/views/humanResources/register/Register";
import Evaluations from "../views/humanResources/evaluations/Evaluations";
import ListWorkers from "../views/humanResources/workersPP/ListWorkers";
import ListEmployees from "../views/responsible/list/ListEmployees";
import HomeResponsible from "../views/responsible/homeR/HomeResponsible";
import Login from "../views/login/Login";
import RegisterUser from "../views/registerUser/RegisterUser";
// import Tracking from "../views/responsible/evaluations/Tracking";



const Router = () => {
   const userRole = window.localStorage.getItem('role')


   if (userRole == ['ROLE_ADMIN', 'ROLE_USER']) {
      return (
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Login />} />
               <Route path="registerUser" element={<RegisterUser />} />
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
               <Route path="/" element={<Login />} />
               <Route path="/registerUser" element={<RegisterUser />} />
               <Route path="/homeResponsible" element={<HomeResponsible />} />
               <Route path="/listEmployees" element={<ListEmployees />} />
               {/* <Route path="/tracking" element={<Tracking />} /> */}
               
            </Routes>
         </BrowserRouter>
      )
   } else{
      return (
         <BrowserRouter>
         <Routes>
               <Route path="/" element={<Login />} />
               <Route path="/registerUser" element={<RegisterUser />} />
         </Routes>
         </BrowserRouter>
      )
         
            
               
   }
};

export default Router;
