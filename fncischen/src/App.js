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

  onHit = e => {
    this.setState({balls: 0, strikes: 0});
  }

  onStrike = e => {
    this.setState({strikes: this.state.strikes + 1});
  }

  onBall = e => {
    this.setState({balls: this.state.ball + 1});
  }

  onFoul = e => {
    this.setState({strikes: this.state.strikes += 2});
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
          <Dashboard onHit={this.onHit} onStrike={this.onStrike} onBall={this.onBall} onFoul={this.onFoul}/>
      </div>
    );
  }
}

export default App;
