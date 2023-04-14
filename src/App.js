<<<<<<< HEAD
import Navbar from './components/navbar/Navbar';
import Login from './views/login/Login';
import './App.css';
import Cards from './components/cards/Cards';
import CardsEvalue from './components/cards-evalue/CardsEvalue';
import CardsSedes from './components/cards-sedes/CardsSedes';
import PasswordChange from './components/password-change/PasswordChange';
=======
import Router from "./router/router";
import RouterResponsile from './router/RouterResponsile';
import Login from '../src/views/login/Login'
import "./App.css";
import Comments from "./views/responsibe/comments/Comments";
// import Login from "./views/login/Login";
import { Calendar } from "react-big-calendar";
import CalendarPage from "./components/calendar/Calendar";
>>>>>>> origin/unificar

function App() {
  // axiosInterceptor;
  return (
<<<<<<< HEAD
    <div>
      <header >
       {/* <Navbar /> */}
       {/* <Login />  */}
       { <Cards /> }
       {/* <CardsEvalue />  */}
       {/* <CardsSedes /> */}
       {/* <PasswordChange /> */}
      </header>
    </div>
=======
    <>
      <div>
        {/* <Router/> */}
        {/* <CalendarPage /> */}
        <RouterResponsile/>
        {/* <Login/>  */}
        {/* <Comments/> */}
      </div>
    </>
>>>>>>> origin/unificar
  );
}

export default App;
