import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/navbar-HHRR/Navbar';
import "../homeRRHH/home.css";
import axios from '../../api/axios';
import customActions from '../../../components/actions';
import CalendarPage from '../../../components/calendar/Calendar';
import SmallCalendar from '../../../components/smallCalendar/SmallCalendar';
import DailyAgenda from '../../../components/dailyAgenda/DailyAgenda';

const Home = () =>{

  const [user, setUser] = useState({});
  
  const [isCalendarPageVisible, setIsCalendarPageVisible] = useState(false);
  const [isDailyAgendaVisible, setIsDailyAgendaVisible] = useState(true);
  const [dayCalendar, setDayCalendar] = useState(new Date());

  useEffect(()=>{
   Promise.resolve (customActions())
   .then(result => {
    console.log(result, 'loquesea')
    setUser(result)
   })
  },[])

  
  const handleSmallCalendarClick = (valueDay) => {
    console.log('hola', valueDay)
    setDayCalendar(valueDay);
    setIsCalendarPageVisible(!isCalendarPageVisible);
    setIsDailyAgendaVisible(false);
  };

  const resetState = () => {
    setIsCalendarPageVisible(false);
    setIsDailyAgendaVisible(true);
  };

  return (
    <div className='containerHome'>
        <Navbar user={user} />
        <section className={`agenda ${isDailyAgendaVisible ? '' : 'agenda--hidden'}`}>
          <DailyAgenda dayCalendar={dayCalendar}/>
      </section>
      <section className="calendar" >
        {!isCalendarPageVisible && <SmallCalendar handleSmallCalendarClick={ handleSmallCalendarClick} />}
        {isCalendarPageVisible && <CalendarPage dayCalendar={dayCalendar} resetState={resetState} />}
    </section>
        <div className="container">
          <h2>Agenda del Día</h2>
          <section className="agenda">
            {/* Renderiza la agenda del día desde otro componente de calendario */}
            {/* <Calendar /> */}
          </section>
          <div className="calendar-container">
            {/* Renderiza el calendario pequeño con estilos de glasmorfismo */}
            <div className="calendar">
              {/* Contenido del calendario */}
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default Home;







