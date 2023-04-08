import React from 'react';

class AddEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      start: '',
      end: ''
    };
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  }

  handleStartChange = (event) => {
    this.setState({ start: event.target.value });
  }

  handleEndChange = (event) => {
    this.setState({ end: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, start, end } = this.state;
    this.props.onAddEvent({ title, start, end });
    this.setState({ title: '', start: '', end: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Título:
          <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
        </label>
        <label>
          Inicio:
          <input type="datetime-local" value={this.state.start} onChange={this.handleStartChange} />
        </label>
        <label>
          Fin:
          <input type="datetime-local" value={this.state.end} onChange={this.handleEndChange} />
        </label>
        <button type="submit">Agregar evento</button>
      </form>
    );
  }
}

export default AddEventForm;