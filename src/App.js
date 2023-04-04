import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Login from './views/login/Login';
import HighForm from './components/highForm/HighForm';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './App.css';

const localizer = momentLocalizer(moment);

function App() {
  const [events, setEvents] = useState([
    {
      start: new Date(),
      end: new Date(),
      title: 'Ejemplo de evento',
    },
  ]);

  return (
    <div>
      <header >
      <Navbar />
       <Login />
       <HighForm />
       <Calendar localizer={localizer} events={events} />
      </header>
    </div>
  );
}

export default App;
