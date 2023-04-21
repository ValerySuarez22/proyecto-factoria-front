import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import '../calendar/react-datepicker/dist/react-datepicker.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import AddEventFormResponsible from './AddEventFormResponsible';
import '../calendar/calendar.css';
import axios from 'axios';
import DailyAgenda from '../dailyAgenda/DailyAgenda';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

moment.updateLocale('es', {
  week: {
    dow: 1, 
  },
});
const localizer = momentLocalizer(moment);

const Event = ({ event, selected }) => (
  <div className={`event ${selected ? 'selected' : 'unselected'}`}>
    {event.title}
  </div>
);

class CalendarPageResponsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      selectedEvent: null,
      selectedDay: null,
    };
  }

  componentWillMount() {
    axios.get('http://127.0.0.1:8000/api/calendar', {
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem('token')}`,
      // },
    })

      .then((res) => {
        const events = []
        res.data.forEach((event) => {
          if (this.props.user.rol == 'User') {
            if (this.props.user.email === event.recipient) {
              events.push({
                start: (event.startDate.date),
                end: (event.finishDate.date),
                title: event.title,
                id: event.id,
                recipient: event.recipient,
              })
            }
          }else {
            events.push({
              start: (event.startDate.date),
              end: (event.finishDate.date),
              title: event.title,
              id: event.id,
              recipient: event.recipient,
            })
          }
        });
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
  
  // const dayEvents = events.filter((ev) => moment(ev.start).isSame(event.start, 'day'));
  // this.props.addEventToDailyAgenda(event);

  }


  handleSelectEvent = (event) => {
    this.setState({ selectedEvent: event });
  }


  handleCancel = () => {
    const { selectedEvent } = this.state; console.log('adiós', selectedEvent)
    const updatedEvent = { ...selectedEvent, selected: false };
    const updatedEvents = this.state.events.map(event => event === selectedEvent ? updatedEvent : event);
    this.setState({ events: updatedEvents, selectedEvent: null });
  }


  handleDeleteEvent = (id) => {
    const { events, selectedEvent } = this.state;

    axios.delete(`http://127.0.0.1:8000/api/calendar/${id}/delete`)
      .then(() => {
        const updatedEvents = events.filter((event) => event.id !== selectedEvent.id);
        this.setState({ events: updatedEvents, selectedEvent: null });
      })
      .catch(error => console.error(error));
}




  render() {
    const { selectedEvent } = this.state;
    const {dayCalendar, resetState, user} = this.props;
    return (
      <div className='calendar-container wrapper'>
        {/* <div className='form-row'> */}
        <button className="close-btn" onClick={() => {
          this.setState({showCalendar: false});
          resetState();
        }}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      {user.rol !== "User" && 
      <>
      <h4>Añadir nuevo evento</h4>
          <AddEventFormResponsible onAddEvent={this.handleAddEvent} />
      </> 
      }
        {/* </div> */}
        <div style={{ height: '500px', width: '90%', margin: '0 auto' }}>
          <Calendar
            localizer={localizer}
            events={this.state.events}
            defaultDate={dayCalendar}
            components={{
              event: (props) => <Event {...props} selected={props.event === selectedEvent} />,
            }}
            messages={{
              today: 'Hoy',
              previous: 'Anterior',
              next: 'Siguiente',
              month: 'Mes',
              week: 'Semana',
              day: 'Día',
              agenda: 'Agenda',
            }}
            onSelectEvent={this.handleSelectEvent}
          />
          {selectedEvent && (
            <div className={`event-description ${selectedEvent && 'selected'}`}>
              <p>¿Eliminar evento "{selectedEvent.title}"?</p>
                <button className='delete-button' onClick={() => this.handleDeleteEvent(selectedEvent.id)}>Eliminar</button>
                <button className='cancel-button' onClick={this.handleCancel}>Cancelar</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}


export default CalendarPageResponsible;