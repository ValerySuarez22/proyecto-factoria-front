// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from '../../src/views/humanResources/home/Home'
// import Profile from "../views/profile/Profile";
// import Login from "../views/login/Login";
// import Register from '../../src/views/register/Register'
// import Navbar from '../components/navbar/Navbar'




// const Router = () => {
//    return (
//       <BrowserRouter>
//       <Navbar/>
//          <Routes>
//             <Route path="/" element={<Home/>} />
//             <Route path="/register" element={<Register/>} />
//             <Route path="/login" element={<Login/>} />
            
            
//          </Routes>
//       </BrowserRouter>
//    );
// };

// export default Router



// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';


// import Login from '../views/login/Login.jsx';

// import HRHome from '../views/humanResources/home/Home.jsx';
// import HRRegister from '../views/humanResources/register/Register.jsx';
// import HREmployees from '../views/humanResources/employees/Employees.jsx';
// import HRTeam from '../views/humanResources/team/Team.jsx';

// import RespHome from '../views/responsibles/home/Home.jsx';
// import RespEmployees from '../views/responsibles/employees/Employees.jsx';
// import RespEvaluations from '../views/responsibles/evaluations/Evaluations.jsx';

// import EmplHome from '../views/employees/home/Home.jsx';
// import EmplEvaluations from '../views/employees/evaluations/Evaluations.jsx';
// import EmplPassword from '../views/employees/password/Password.jsx';

// const CustomRouter = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route exact path="/" component={Login} />
//         <Route exact path="/hr/home" component={HRHome} />
//         <Route exact path="/hr/register" component={HRRegister} />
//         <Route exact path="/hr/employees" component={HREmployees} />
//         <Route exact path="/hr/team" component={HRTeam} />
//         <Route exact path="/resp/home" component={RespHome} />
//         <Route exact path="/resp/employees" component={RespEmployees} />
//         <Route exact path="/resp/evaluations" component={RespEvaluations} />
//         <Route exact path="/empl/home" component={EmplHome} />
//         <Route exact path="/empl/evaluations" component={EmplEvaluations} />
//         <Route exact path="/empl/password" component={EmplPassword} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default CustomRouter;