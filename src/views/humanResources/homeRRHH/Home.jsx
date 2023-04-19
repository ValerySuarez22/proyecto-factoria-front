import React, { useState } from 'react';
import Navbar from '../../../components/navbar-HHRR/Navbar';
import "../homeRRHH/home.css";
import CalendarPage from '../../../components/calendar/Calendar';
import SmallCalendar from '../../../components/smallCalendar/SmallCalendar';
import DailyAgenda from '../../../components/dailyAgenda/DailyAgenda';

const Home = () => {
  const [isCalendarPageVisible, setIsCalendarPageVisible] = useState(false);
  const [isDailyAgendaVisible, setIsDailyAgendaVisible] = useState(true);
  const [dayCalendar, setDayCalendar] = useState(new Date());

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
    <div className='homeRRHH-container'>
      <Navbar />
      <section className={`agenda ${isDailyAgendaVisible ? '' : 'agenda--hidden'}`}>
          <DailyAgenda dayCalendar={dayCalendar}/>
      </section>
      <section className="calendar" >
        {!isCalendarPageVisible && <SmallCalendar handleSmallCalendarClick={ handleSmallCalendarClick} />}
        {isCalendarPageVisible && <CalendarPage dayCalendar={dayCalendar} resetState={resetState} />}
    </section>
    </div>
  );
}

export default Home;







