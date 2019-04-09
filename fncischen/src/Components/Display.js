import React, { Component } from 'react';

export default class Display extends Component {
    constructor(){
        this.state = {
            balls: 0,
            strikes: 0
        }
    }

    render(){
        return(
            <div className="Display">
            
            <ul>
            <li><b>Balls:</b> {this.state.balls}</li>
            <li><b>Strikes:</b>{this.state.strikes}</li>
            
            </ul>
            </div>
        )
    }

} 