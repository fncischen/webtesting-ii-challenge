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

  onSubmit = e => {
    const targetValue = [e.target.value] + 1;
    this.setState({[e.target.name]: targetValue});
  }

  onComponentDidMount() {
    if(this.state.strikes == 3) {
      this.setState({balls: 0, strikes: 0})
      console.log("Three strikes and you're out!")
    }
  }

  render() {
    return (
      <div className="App">
          <Display balls={this.state.balls} strikes={this.state.strikes}/>
          <Dashboard onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default App;
