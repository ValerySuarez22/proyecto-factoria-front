import React from 'react';
import moment from 'moment';
import 'moment/locale/es';
import '../dailyAgenda/dailyAgenda.css'

class DailyAgenda extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      selectedDate: new Date(), // inicialmente se mostrarán los eventos del día actual
    };
  }

  componentWillMount() {
    this.fetchEvents();
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    this.setState({ selectedDate: nextProps.dayCalendar})
  }

  fetchEvents = () => {
    const url = `http://127.0.0.1:8000/api/calendar`;
    const token = localStorage.getItem('jwtToken'); // obtiene el token JWT de localStorage
    fetch(url, {
      headers: {
        // Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ events: data });
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
    let eventsOnSelectedDate = [] ;
    if (events.length >0) {
      eventsOnSelectedDate = events.filter(event => moment (new Date(event.startDate.date)).format('YYYY-MM-DD') == moment(selectedDate).format('YYYY-MM-DD'))
    }
    
   
   

    return (
      <div className='daily-agenda'>
        <h1>Agenda del día: {moment(selectedDate).format('dddd D [de] MMMM')}</h1>
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
                {event.title} - {moment(event.start).format('h:mm a')} a {moment(event.end).format('h:mm a')}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default DailyAgenda;