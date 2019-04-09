import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  constructor() {
    this.state ={
      balls: 0,
      strikes: 0
    }
  }

  onChange = e => {

  }

  render() {
    return (
      <div className="App">
          <Router path="/" Component={Display}/>
          <Router path="/dashboard" Component={Dashboard}/>
      </div>
    );
  }
}

export default App;
