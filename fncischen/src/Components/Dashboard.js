import React, { Component } from 'react';

export default class Dashboard extends Component {
    
    constructor(){
    }

    render(){
        return(
            
            <div className="Dashboard">
            <h2>Dashboard</h2>
            <button type="submit" onClick={this.props.onStrike}>Strike</button>
            <button type="submit" onClick={this.props.onFoul}>Foul</button>
            <button type="submit" onClick={this.props.onBall}>Ball</button>
            <button type="submit" onClick={this.props.onHit}>Hit</button>
            </form>

            </div>
        )
    }

} 