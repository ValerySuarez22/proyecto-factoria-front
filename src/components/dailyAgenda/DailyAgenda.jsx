import React from 'react';
import moment from 'moment';
import 'moment/locale/es';

class DailyAgenda extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      selectedDate: moment().startOf('day'), // inicialmente se mostrarán los eventos del día actual
    };
  }

  componentDidMount() {
    this.fetchEvents();
  }

  fetchEvents = () => {
    const url = `http://127.0.0.1:8000/api/calendar?date=${this.state.selectedDate.format('YYYY-MM-DD')}`;
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
    const eventsOnSelectedDate = events.filter(event => moment(event.start).isSame(selectedDate, 'day'));

    return (
      <div>
        <h2>Agenda del día: {selectedDate.format('dddd D [de] MMMM')}</h2>
        <div>
          <button onClick={() => this.handleDateChange(selectedDate.clone().subtract(1, 'day'))}>Anterior</button>
          <button onClick={() => this.handleDateChange(moment())}>Hoy</button>
          <button onClick={() => this.handleDateChange(selectedDate.clone().add(1, 'day'))}>Siguiente</button>
        </div>
        {eventsOnSelectedDate.length === 0 ? (
          <p>No hay eventos programados para este día.</p>
        ) : (
          <ul>
            {eventsOnSelectedDate.map(event => (
              <li key={event.id}>{event.title} - {moment(event.start).format('h:mm a')} a {moment(event.end).format('h:mm a')}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default DailyAgenda;