import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./form.js";

export default class App extends Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Form onChange={fields => this.onChange(fields)} />
      </div>
    );
  }
}

