import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './Components/Dashboard';

class App extends Component {
  constructor() {
    this.state ={
      balls: 0,
      strikes: 0
    }
  }

  onChange = e => {
    this.setState({[e.target.name]: [e.target.value]});
  }

  render() {
    return (
      <div className="App">
          <Display balls={this.state.balls} strikes={this.state.strikes}/>
          <Dashboard onSubmit={this.onChange}/>
      </div>
    );
  }
}

export default App;
