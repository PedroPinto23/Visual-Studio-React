import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      message: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage = enviar => {
    enviar.preventDefault();
    if (!this.state.input.length) {
      return;
    }
    enviar = this.state.input;
    this.setState({
      input: "",
      message: this.state.message.concat(enviar)
    });
  };
  handleDelete(event) {
    var array = [...this.state.message];
    var index = array.indexOf(event.target.value); // Let's say it's Bob.
    delete array[index];
    this.setState({
      message: array
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Lista</h1>
        <input
          className="input"
          type="text"
          value={this.state.input}
          placeholder="Digite aqui"
          onChange={this.handleChange}
        />
        <button
          className="botao"
          value={this.state.message}
          onClick={this.submitMessage}
        >
          Inserir
        </button>
        <ul>
          {this.state.message.map(msg => (
            <li className="paper" key={msg + 1}>
              {msg}
              <button
                className="botao"
                key={msg + 1}
                value={this.state.message}
                onClick={this.handleDelete}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
