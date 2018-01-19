import React, { Component } from "react";
import "./assets/css/default.min.css";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Register from "./components/RegisterComponent/register";
import Header from './components/HeaderComponent/header';
import Footer from './components/FooterComponent/footer';
import Homepage from './components/pages/homePage';
export default class App extends Component {
  state = {
    fields: {}
  };

  // onChange = updatedValue => {
  //   this.setState({
  //     fields: {
  //       ...this.state.fields,
  //       ...updatedValue
  //     }
  //   });
  // };

  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <Route exact path='/' compponent={Homepage}/>
        <Route exact path='/register' component={Register} />
        <Footer />
      </div>
      </Router>
    );
  }
}

