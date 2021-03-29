import React from 'react';

class Button extends React.Component {
    startTimer() {
        const d = Number(1499);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
    
        var hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
        var mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
        var sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
        console.log(hDisplay + mDisplay + sDisplay);
    }
    
    render() {
        return (
            <div>
                <button className="btn btn-outline-light btn-block w-100" onClick={this.startTimer}>
                    Start
                </button>
            </div>
        );
    }
}

export default Button;