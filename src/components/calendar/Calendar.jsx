import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import '../calendar/react-datepicker/dist/react-datepicker.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import AddEventForm from './AddEventForm';
import '../calendar/calendar.css';
import axios from 'axios';


moment.locale('es');
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
      events: [],
      selectedEvent: null,
      selectedDay: null,
    };
  }


  componentWillMount() {
    // cargar los eventos existentes del backend
    console.log('mensajito')
    axios.get('http://127.0.0.1:8000/api/calendar', {
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem('token')}`,
      // },
    })
  //     .then((res) => {
  //       console.log(res)
  //       return res.data.json()
        
  // })
      .then((res) => {
        const events = res.data.map((event) => ({
          start: (event.startDate.date),
          end: (event.finishDate.date),
          title: event.title,
          id: event.id,
        }));
        console.log('mensajito2', events)
        this.setState({ events });
      })
      .catch((error) => console.log(error));
  }


  handleAddEvent = (event) => {
    const { events } = this.state;
    this.setState({ events: [...events, event] });

    const formatEvent = {
      title: event.title, 
      startDate: event.start,
      finishDate: event.end,
      recipient: event.recipient,
    }

    axios.post('http://127.0.0.1:8000/api/calendar/new', formatEvent
  //   {
  //   headers: {
  //     Authorization: `Bearer ${YOUR_AUTH_TOKEN}`,
  //   },
  // }
  )
  // .then((response) => {
  //   const savedEvent = response.data;
  //   const { events } = this.state;
  //   this.setState({ events: [...events, savedEvent] });
  // })
  .catch((error) => {
    console.error(error);
  });
  }


  handleSelectEvent = (event) => {
    console.log('rosa', event)
    delete event.selected
    console.log('morado', event)
    this.setState({ selectedEvent: event });
  }




  handleCancel = () => {
    const { selectedEvent } = this.state; console.log('adiós', selectedEvent)
    const updatedEvent = { ...selectedEvent, selected: false };
    console.log('hola', updatedEvent)
    const updatedEvents = this.state.events.map(event => event === selectedEvent ? updatedEvent : event);
    this.setState({ events: updatedEvents, selectedEvent: null });
  }


  handleDeleteEvent = (id) => {
    const { events, selectedEvent } = this.state;
    const updatedEvents = events.filter((event) => event !== selectedEvent);
    this.setState({ events: updatedEvents, selectedEvent: null });
  }






  render() {
    const { selectedEvent } = this.state;
    return (
      <div className='calendar-container wrapper'>
        {/* <div className='form-row'> */}
          <h4>Añadir nuevo evento</h4>
          <AddEventForm onAddEvent={this.handleAddEvent} />
        {/* </div> */}
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
             
                <button className='delete-button' onClick={this.handleDeleteEvent()}>Eliminar</button>
                <button className='cancel-button' onClick={this.handleCancel}>Cancelar</button>
             
            </div>
          )}
        </div>
      </div>
    );
  }
}


export default CalendarPage;