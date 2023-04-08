import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import '../calendar/react-datepicker/dist/react-datepicker.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import AddEventForm from './AddEventForm';
import '../calendar/calendar.css';

const localizer = momentLocalizer(moment);

const Event = ({ event, selected }) => (
  <div className={`event ${selected ? 'selected' : 'unselected'}`}>
    {event.title}
  </div>
);

class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          start: new Date(),
          end: new Date(moment().add(1, 'days')),
          title: 'Prueba de evento',
        },
      ],
      selectedEvent: null,
    };
  }

  handleAddEvent = (event) => {
    const { events } = this.state;
    this.setState({ events: [...events, event] });
  }

  handleSelectEvent = (event) => {
    console.log('rosa', event)
    delete event.selected
    console.log('morado', event)
    this.setState({ selectedEvent: event });
  }


  handleCancel = () => {
    const { selectedEvent } = this.state; console.log('adiós', selectedEvent)
    const updatedEvent = {...selectedEvent, selected: false}; 
    console.log('hola', updatedEvent)
    const updatedEvents = this.state.events.map(event => event === selectedEvent ? updatedEvent : event);
    this.setState({ events: updatedEvents, selectedEvent: null });
  }

  handleDeleteEvent = () => {
    const { events, selectedEvent } = this.state;
    const updatedEvents = events.filter((event) => event !== selectedEvent);
    this.setState({ events: updatedEvents, selectedEvent: null });
  }



  render() {
    const { selectedEvent } = this.state;
    return (
      <div className='calendar-container wrapper'>
        <h4>Añadir nuevo evento</h4>
        <AddEventForm onAddEvent={this.handleAddEvent} />
        <div style={{ height: '500px', width: '90%', margin: '0 auto' }}>
          <Calendar
            localizer={localizer}
            events={this.state.events}
            defaultDate={new Date()}
            components={{
              event: (props) => <Event {...props} selected={props.event === selectedEvent} />,
            }}
            onSelectEvent={this.handleSelectEvent}
          />
         {selectedEvent && (
  <div className={`event-description ${selectedEvent && 'selected'}`}>
    <p>¿Eliminar evento "{selectedEvent.title}"?</p>
    <div className='buttons'>
      <button onClick={this.handleDeleteEvent}>Eliminar</button>
      <button className='cancel-button' onClick={this.handleCancel}>Cancelar</button>
    </div>
  </div>
)}
        </div>
      </div>
    );
  }
}

export default CalendarPage;