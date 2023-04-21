import React, { useEffect, useState } from 'react'
import NavbarR from '../../../components/navbarResponsible/NavbarR';
import '../homeR/homeResponsible.css';
import CalendarPageResponsible from '../../../components/calendarResponsible/CalendarResponsible';
import customActions from '../../../components/actions';
import SmallCalendarResponsible from '../../../components/smallCalendarResponsible/SmallCalendarResponsible';
import DailyAgendaResponsible from '../../../components/dailyAgendaResponsible/DailyAgendaResponsible';


const HomeResponsible = () =>{

  const [user, setUser] = useState({});
  
  const [isCalendarPageResponsibleVisible, setIsCalendarPageResponsibleVisible] = useState(false);
  const [isDailyAgendaResponsibleVisible, setIsDailyAgendaResponsibleVisible] = useState(true);
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
    setIsCalendarPageResponsibleVisible(!isCalendarPageResponsibleVisible);
    setIsDailyAgendaResponsibleVisible(false);
  };

  const resetState = () => {
    setIsCalendarPageResponsibleVisible(false);
    setIsDailyAgendaResponsibleVisible(true);
  };

  return (
    <div className='containerHome'>
        <NavbarR user={user} />
        <section className={`agenda ${isDailyAgendaResponsibleVisible ? '' : 'agenda--hidden'}`}>
          <DailyAgendaResponsible user={user} dayCalendar={dayCalendar}/>
      </section>
      <section className="calendar" >
        {!isCalendarPageResponsibleVisible && <SmallCalendarResponsible user={user} handleSmallCalendarClick={ handleSmallCalendarClick} />}
        {isCalendarPageResponsibleVisible && <CalendarPageResponsible user={user} dayCalendar={dayCalendar} resetState={resetState} />}
    </section>
    </div>
    
  )
}

export default HomeResponsible
