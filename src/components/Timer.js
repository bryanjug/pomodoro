import Countdown, {zeroPad} from "react-countdown";
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
                    className="btn btn-outline-light btn-block w-50"
                    onClick={() => startButton()}
                >
                    Start
                </button>
            );
        }
        if (start === true) {
            return (
                <button 
                    className="btn btn-outline-light btn-block w-50"
                    onClick={() => stopButton()}
                >
                    Stop
                </button>
            );
        }
    };

    const Completionist = () => <span>Time to take a break!</span>;

    const renderer = ({ minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return <span>{zeroPad(minutes, 2)}:{zeroPad(seconds, 2)}</span>;
        }
    };

	return (
		<div className="text-center">
			<p style={{ fontSize: "550%" }} className="text-light">
                <Countdown
                    date={Date.now() + 1500000} //1500000
                    intervalDelay={0}
                    precision={2}
                    autoStart={false}
                    ref={countdown}
                    renderer={renderer}
                >

                </Countdown>
            </p>
            {renderButton()}
		</div>
	);
};

export default Time;
