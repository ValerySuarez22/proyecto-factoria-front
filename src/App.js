<<<<<<< HEAD
<<<<<<< HEAD
import Router from "./router/router";
import Login from '../src/views/login/Login'
import "./App.css";
import Comments from "./views/responsibe/comments/Comments";
import RouterResponsile from "./router/RouterResponsible";
=======
import Navbar from './components/navbar/Navbar';
import Login from './views/login/Login';
=======
import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Login from './views/login/Login';
import HighForm from './components/highForm/HighForm';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
>>>>>>> origin/hilda
import './App.css';
import Cards from './components/cards/Cards';
import CardsEvalue from './components/cards-evalue/CardsEvalue';
import CardsSedes from './components/cards-sedes/CardsSedes';
import PasswordChange from './components/password-change/PasswordChange';
>>>>>>> e9cb556d1d897800dd16142c96fcf7363b806dad

const localizer = momentLocalizer(moment);

function App() {
<<<<<<< HEAD
  // axiosInterceptor;
=======
  const [events, setEvents] = useState([
    {
      start: new Date(),
      end: new Date(),
      title: 'Ejemplo de evento',
    },
  ]);

>>>>>>> origin/hilda
  return (
<<<<<<< HEAD
    <>
      <div>
        <Router/>
        {/* <RouterResponsile/> */}
        {/* <Login/>  */}
        {/* <Comments/> */}
      </div>
    </>
=======
    <div>
      <header >
       {/* <Navbar /> */}
<<<<<<< HEAD
       {/* <Login />  */}
       {/* <Cards /> */}
       {/* <CardsEvalue />  */}
       {/* <CardsSedes /> */}
       <PasswordChange />
=======
       <Login />
       <HighForm />
       <Calendar localizer={localizer} events={events} />
>>>>>>> origin/hilda
      </header>
    </div>
>>>>>>> e9cb556d1d897800dd16142c96fcf7363b806dad
  );
}

export default App;
