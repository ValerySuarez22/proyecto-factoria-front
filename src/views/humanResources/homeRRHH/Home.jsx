import React, { useState } from 'react';
import Navbar from '../../../components/navbar-HHRR/Navbar';
import "../homeRRHH/home.css";
import CalendarPage from '../../../components/calendar/Calendar';
import SmallCalendar from '../../../components/smallCalendar/SmallCalendar';
import DailyAgenda from '../../../components/dailyAgenda/DailyAgenda';

const Home = () => {
  const [isCalendarPageVisible, setIsCalendarPageVisible] = useState(false);

  const handleSmallCalendarClick = () => {
    setIsCalendarPageVisible(!isCalendarPageVisible);
  };

  return (
    <div className='homeRRHH-container'>
      <Navbar />
      <section className="agenda">
          <DailyAgenda />
      </section>
      <section className="calendar" onClick={handleSmallCalendarClick}>
        <SmallCalendar />
        {isCalendarPageVisible && <CalendarPage />}
    </section>
    </div>
  );
}

export default Home;







