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
          <DailyAgenda user={user} dayCalendar={dayCalendar}/>
      </section>
      <section className="calendar" >
        {!isCalendarPageVisible && <SmallCalendar user={user} handleSmallCalendarClick={ handleSmallCalendarClick} />}
        {isCalendarPageVisible && <CalendarPage user={user} dayCalendar={dayCalendar} resetState={resetState} />}
    </section>
    </div>
    
  )
}

export default Home;







