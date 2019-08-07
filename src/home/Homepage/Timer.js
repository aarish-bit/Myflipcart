import React, { Component } from 'react';
import Countdown from 'react-countdown-now';

class Timer extends Component {
    render() {

        // Random component
        const Completionist = () => <span>EXPIRED</span>;

        // Renderer callback with condition
        const renderer = ({ hours, minutes, seconds, completed }) => {
            localStorage.setItem("time", `${hours}:${minutes}:${seconds}` )
            // console.log(localStorage.getItem("time"))
        
            if (completed) {
                // Render a complete state
                return <Completionist />;
            } else {
                // Render a countdown
               
                return <span>
                {localStorage.getItem("time")}</span>;
            }
        };
        var date = new Date();
        return (
            <Countdown
                date={ date.setDate(date.getDate() + 1)}
                renderer={renderer}
            /> 
        )
    }
}

export default Timer
