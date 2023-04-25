import React from 'react';
import moment from 'moment';
import 'moment/locale/es';
import '../dailyAgendaResponsible/dailyAgendaResponsible.css'

class DailyAgendaResponsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      selectedDate: new Date(), // inicialmente se mostrarán los eventos del día actual
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.name && !this.props.user.name) {
      this.fetchEvents();
    }
    this.setState({ selectedDate: nextProps.dayCalendar })
  }

  fetchEvents = () => {
    const url = `http://127.0.0.1:8000/api/calendar`;
    const token = localStorage.getItem('jwtToken'); // obtiene el token JWT de localStorage
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const events = []
        data.forEach((event) => {

          if (this.props.user.email === event.recipient) {
            events.push({
              start: (event.startDate.date),
              end: (event.finishDate.date),
              title: event.title,
              id: event.id,
              recipient: event.recipient,
              name: event.name,
            })
          }
        });
        this.setState({ events: events });
      })
      .catch(error => console.error(error));
  }

  handleDateChange = (date) => {
    this.setState({ selectedDate: date }, () => {
      this.fetchEvents();
    });
  }

  render() {
    const { events, selectedDate } = this.state;
    let eventsOnSelectedDate = [];
    if (events.length > 0) {
      eventsOnSelectedDate = events.filter(event => moment(new Date(event.start)).format('YYYY-MM-DD') == moment(selectedDate).format('YYYY-MM-DD'))
    }


    return (
      <div className='daily-agenda'>
        <h1 className="title-agenda">Agenda del día: {moment(selectedDate).format('dddd D [de] MMMM')}</h1>
        <div className='buttons-agenda'>
          <button onClick={() => this.handleDateChange(moment(selectedDate).subtract(1, 'day'))}>Anterior</button>
          <button onClick={() => this.handleDateChange(moment())}>Hoy</button>
          <button onClick={() => this.handleDateChange(moment(selectedDate).add(1, 'day'))}>Siguiente</button>
        </div>
        {eventsOnSelectedDate.length === 0 ? (
          <p className='agenda-events'>No hay eventos programados para este día.</p>
        ) : (
          <ul id="event-list">
            {eventsOnSelectedDate.map(event => (
              <li key={event.id}>
                <span className="event-dot">•</span>
                {event.title} - {moment(event.start).format('LLLL')} a {moment(event.end).format('LT')} con {event.name.length > 0 && event.name[0].name} {event.name.length > 0 && event.name[0].lastname}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default DailyAgendaResponsible