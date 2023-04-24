import React from 'react';

class AddEventFormResponsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      start: '',
      end: '',
      recipient: '',
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

  handleRecipientChange = (event) => {
    this.setState({ recipient: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, start, end, recipient } = this.state;
    this.props.onAddEvent({ title, start, end, recipient });
    this.setState({ title: '', start: '', end: '', recipient: ''});
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
        <label>
          Destinatario:
          <input type="email" value={this.state.recipient} onChange={this.handleRecipientChange} />
        </label>
        <button type="submit">Agregar evento</button>
      </form>
    );
  }
}

export default AddEventFormResponsible;