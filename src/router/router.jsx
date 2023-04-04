import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../../src/views/humanResources/home/Home'
// import Profile from "../views/profile/Profile";
// import Login from "../views/login/Login";
// import Register from "../views/register/Register";
import Navbar from '../components/navbar/Navbar'




const Router = () => {
   return (
      <BrowserRouter>
      <Navbar/>
         <Routes>
            <Route path="/" element={<Home/>} />
            {/* <Route path="/profile" element={<Profile/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/register" element={<Register/>} /> */}
         </Routes>
      </BrowserRouter>
   );
};

export default Router