import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../smallCalendarResponsible/smallCalendarResponsible.css';


const SmallCalendarResponsible= ({handleSmallCalendarClick}) => {
  const prueba= () => {
    console.log('he clickado un día')
  }
  return (
    <div className='small-calendar'>
      <Calendar onClickDay={handleSmallCalendarClick} />
    </div>
  )
}

export default SmallCalendarResponsible