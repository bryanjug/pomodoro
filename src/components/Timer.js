import Countdown from "react-countdown";
import {useState, useRef} from 'react';

const Time = () => {
    const [start, setStart] = useState(false);
    
    const countdown = useRef(null);
    
    const startButton = () => {
        setStart(true);
        countdown.current.start();
    };

    const stopButton = () => {
        setStart(false);
        countdown.current.stop();
    }

    const renderButton = () => {
        if (start === false) {
            return (
                <button 
                    className="btn btn-outline-light btn-block w-100"
                    onClick={() => startButton()}
                >
                    Start
                </button>
            );
        }
        if (start === true) {
            return (
                <button 
                    className="btn btn-outline-light btn-block w-100"
                    onClick={() => stopButton()}
                >
                    Stop
                </button>
            );
        }
    };
    
	return (
		<div>
			<p style={{ fontSize: "550%" }} className="text-light text-center">
                <Countdown
                    date={Date.now() + 1500000}
                    intervalDelay={0}
                    precision={3}
                    autoStart={false}
                    ref={countdown}
                    renderer={(props) => (
                        <div>
                            {props.minutes}:{props.seconds}:{props.milliseconds}
                        </div>
                    )}
                />
            </p>
            {renderButton()}
		</div>
	);
};

export default Time;
