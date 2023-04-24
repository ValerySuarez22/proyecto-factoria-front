import React from 'react';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/es';
import '../dailyAgendaRRHH/dailyAgendaRRHH.css';

class DailyAgendaRRHH extends React.Component {
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

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    this.setState({ selectedDate: nextProps.dayCalendar })
  }

  fetchEvents = () => {
    const url = `http://127.0.0.1:8000/api/calendar`;
    const token = localStorage.getItem('loggedAppUser'); // obtiene el token JWT de localStorage
    axios.get(url
      // ,{
      
      // headers: {
        // Authorization: `Bearer ${token}`,
      // },
    // }
    )
      // .then(response => response.json())
      .then(result=> {
        console.log('dataeventos', result.data)
        this.setState({ events: result.data });
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
      console.log('selected', selectedDate)
      eventsOnSelectedDate = events.filter(event => moment(new Date(event.startDate.date)).format('YYYY-MM-DD') == moment(selectedDate).format('YYYY-MM-DD'))
      console.log('mi evento', eventsOnSelectedDate)
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
                {event.title} - {moment(event.startDate.date).format('LLLL')} a {moment(event.finishDate.date).format('LT')} con {event.name.length>0 && event.name[0].name}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default DailyAgendaRRHH