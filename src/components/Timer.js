import Countdown, {zeroPad} from "react-countdown";
import {useState, useRef} from 'react';
import '../css/Timer.css';

//TODO:
//COMPLETION METHOD
//COUNTING COMPLETIONS
//STOPPING === NO COUNTED COMPLETION
//COMPLETION COUNTER AT TOP OF SCREEN
//PAUSING BUTTON
//IMPORT REACT-ROUTER
//CREATE LINKS
//CREATE SERVER FOR STATISTICS
//CREATE STATISTICS PAGE -> GRAPHS EACH HOUR SPENT WORKING OR RESTING (DAY, WEEK, MONTH, YEAR)
//3D BACKGROUND WITH PET
//ADD COUNTER FOR FEEDING PET AT END OF EACH COMPLETION
//ADD FEEDING ANIMATION
//ADD GROWTH COUNTER
//ANIMATE PET GROWING WITH GROWTH COUNTER
//ADD SIZE STATE AND DISPLAY ON SCREEN
//SIZE STATE CHANGES AFTER EACH GROWTH COUNTER
//CHANGE 3D WORLDS ONCE SIZE REACHES CERTAIN NUMBER

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
            return ( //renders start button
                <button 
                    className="btn btn-circle btn-xl cyanButton text-light"
                    onClick={() => startButton()}
                >
                    Start
                </button>
            );
        }
        if (start === true) {
            return ( //renders stop button
                <button 
                    className="btn btn-circle btn-xl cyanButton text-light"
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
                />
            </p>
            {renderButton()}
		</div>
	);
};

export default Time;
