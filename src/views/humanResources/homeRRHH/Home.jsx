import React, { useEffect, useState } from 'react';
import Navbar from '../../../components/navbar-HHRR/Navbar';
import "../homeRRHH/home.css";
import customActions from '../../../components/actions';
import CalendarPageRRHH from '../../../components/calendarRRHH/CalendarRRHH';
import SmallCalendarRRHH from '../../../components/smallCalendarRRHH/SmallCallendarRRHH';
import DailyAgendaRRHH from '../../../components/dailyAgendaRRHH/DailyAgendaRRHH';

const Home = () =>{

  const [user, setUser] = useState({});
  
  const [isCalendarPageRRHHVisible, setIsCalendarPageRRHHVisible] = useState(false);
  const [isDailyAgendaRRHHVisible, setIsDailyAgendaRRHHVisible] = useState(true);
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
    setIsCalendarPageRRHHVisible(!isCalendarPageRRHHVisible);
    setIsDailyAgendaRRHHVisible(false);
  };

  const resetState = () => {
    setIsCalendarPageRRHHVisible(false);
    setIsDailyAgendaRRHHVisible(true);
  };

  return (
    <div className='containerHome'>
        <Navbar user={user} />
        <section className={`agenda ${isDailyAgendaRRHHVisible ? '' : 'agenda--hidden'}`}>
          <DailyAgendaRRHH user={user} dayCalendar={dayCalendar}/>
      </section>
      <section className="calendar" >
        {!isCalendarPageRRHHVisible && <SmallCalendarRRHH user={user} handleSmallCalendarClick={ handleSmallCalendarClick} />}
        {isCalendarPageRRHHVisible && <CalendarPageRRHH user={user} dayCalendar={dayCalendar} resetState={resetState} />}
    </section>
    </div>
    
  )
}

export default Home;







