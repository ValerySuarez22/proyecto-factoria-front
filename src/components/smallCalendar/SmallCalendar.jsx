import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../smallCalendar/smallCalendar.css'


function SmallCalendar() {
  return (
    <div className='small-calendar'>
      <Calendar />
    </div>
  )
}

export default SmallCalendar
