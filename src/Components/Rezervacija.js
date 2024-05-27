import React, { Component } from "react";
import "./Rezervacija.css";

export class Reservacija extends Component {
  state = {
    imePrezime: "",
    email: "",
    brojMobitela: "",
    datum: "",
    vrijeme: "",
    brojGostiju: 1,
    proslava: "",
    poslano: false,
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({ poslano: true });
  };

  render() {
    
    if (this.state.poslano) {
      return (
        <div className="rezerviraj">
          <h1>Vaša Rezervacija</h1>
          <h3>Primili smo vašu rezervaciju. Odobrena je!<br/>Vidimo se!</h3>
          <p><bold>Ime i Prezime:</bold> {this.state.imePrezime}</p>
          <p>Email: {this.state.email}</p>
          <p>Broj Telefona: {this.state.brojMobitela}</p>
          <p>Datum: {this.state.datum}</p>
          <p>Vrijeme: {this.state.vrime}</p>
          <p>Broj Gostiju: {this.state.brojGostiju}</p>
          <p>Proslava: {this.state.event}</p>
        </div>
      );
    } else {
      return (
        <form onSubmit={this.onSubmit}>
          <div className="rezerviraj">
            <h1>Rezervacija Stola</h1>
            <div className="form-group">
              <label htmlFor="ime">Ime i Prezime:</label>
              <input
                type="text"
                id="imePrezime"
                name="imePrezime"
                value={this.state.imePrezime}
                onChange={e => this.setState({ imePrezime: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="brMobitela">Broj Telefona:</label>
              <input
                type="tel"
                id="brMobitela"
                name="brMobitela"
                value={this.state.brojMobitela}
                onChange={e => this.setState({ brojMobitela: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="datum">Datum:</label>
              <input
                type="date"
                id="datum"
                name="datum"
                value={this.state.datum}
                onChange={e => this.setState({ datum: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="vrime">Vrijeme:</label>
              <input
                type="time"
                id="vrime"
                name="vrime"
                value={this.state.vrime}
                onChange={e => this.setState({ vrime: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="brGostiju">Broj Gostiju:</label>
              <input
                type="number"
                id="brGostiju"
                name="brGostiju"
                value={this.state.brojGostiju}
                min="1"
                onChange={e => this.setState({ brojGostiju: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="event">Proslava:</label>
              <input
                type="text"
                id="event"
                name="event"
                value={this.state.event}
                onChange={e => this.setState({ event: e.target.value })}
                required
              />
            </div>
            <button type="submit">Rezerviraj</button>
          </div>
        </form>
      );
    }
  }
}

export default Reservacija;
