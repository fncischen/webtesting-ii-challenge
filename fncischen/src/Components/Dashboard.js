import React, { Component } from 'react';

export default class Dashboard extends Component {
    
    constructor(){
    }

    render(){
        return(
            
            <div className="Dashboard">
            
            <form onSubmit={this.props.onSubmit}>
            <button type="submit">Update Balls</button>
            </form>

            <form onSubmit={this.props.onSubmit}>
            <button type="submit">Update Balls</button>
            </form>

            </div>
        )
    }

} 