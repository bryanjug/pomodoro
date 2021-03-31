// import Countdown, {zeroPad} from "react-countdown";
import React, {useState, useRef, useEffect} from 'react';
import Countdown, {zeroPad} from 'react-countdown';
import '../css/Timer.css';

//TODO:
//(DONE) COMPLETION METHOD -> CREATE TIMER
//(DONE) RENDER TEXT OF CURRENT ACTIVITY (RESTING OR WORKING)
//CREATE USEEFFECT FOR SETTING LONG BREAK + SHORT BREAK + WORK ON TIME VARIABLE BASED ON POMODORO COUNT AND ACTIVITY STATES
//START SOUND
//(DONE) COUNTING COMPLETIONS
//(DONE) STOPPING === NO COUNTED COMPLETION
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
    const [activity, setActivity] = useState("Working Mode");
    const [time, setTime] = useState(3000);
    const [completedCount, setCompletedCount] = useState(0);
    const [pomodoro, setPomodoro] = useState(0);
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
    
    const Work = () => {
        if (completedCount === 0) {
            return (
                <span>
                    {setTime(2000)} 
                    {setStart(false)}
                    {setActivity("Working Mode")}
                </span>
            );
        }
        if (completedCount === 1) {
            return (
                <span>
                    {setTime(2000)} 
                    {setStart(false)}
                    {setPomodoro(pomodoro + 1)}
                    {setActivity("Resting Mode")}
                </span>
            );
        } 
        if (completedCount === 2) { //finish working mode
            return (
                <span>
                    {setTime(2000)} 
                    {setStart(false)}
                    {setActivity("Resting Mode")}
                </span>
            );
        }
        if (completedCount === 3) {
            return (
                <span>
                    {setTime(4000)} 
                    {setStart(false)}
                    {setActivity("Working Mode")}
                </span>
            );
        } 
        if (completedCount === 4) {
            return (
                <span>
                    {setTime(4000)} 
                    {setStart(false)}
                    {setPomodoro(pomodoro + 1)}
                    {setActivity("Working Mode")}
                </span>
            );
        }
        if (completedCount === 5) {
            return (
                <span>
                    {setTime(2000)} 
                    {setStart(false)}
                    {setActivity("Resting Mode")}
                </span>
            );
        }
        if (completedCount === 6) {
            return (
                <span>
                    {setTime(2000)} 
                    {setStart(false)}
                    {setActivity("Resting Mode")}
                </span>
            );
        } 
        if (completedCount === 7) {
            return (
                <span>
                    {setTime(4000)} 
                    {setStart(false)}
                    {setActivity("Working Mode")}
                </span>
            );
        }
        if (completedCount === 8) {
            return (
                <span>
                    {setTime(4000)} 
                    {setStart(false)}
                    {setActivity("Working Mode")}
                </span>
            );
        }
        if (completedCount === 9) {
            return (
                <span>
                    {setTime(2000)} 
                    {setStart(false)}
                    {setPomodoro(pomodoro + 1)}
                    {setActivity("Resting Mode")}
                </span>
            );
        }
        if (completedCount === 10) {
            return (
                <span>
                    {setTime(2000)} 
                    {setStart(false)}
                    {setActivity("Resting Mode")}
                </span>
            );
        }
        if (completedCount === 11) {
            return (
                <span>
                    {setTime(4000)} 
                    {setStart(false)}
                    {setActivity("Working Mode")}
                </span>
            );
        }
        if (completedCount === 12) {
            return (
                <span>
                    {setTime(4000)} 
                    {setStart(false)}
                    {setActivity("Working Mode")}
                </span>
            );
        }
        if (completedCount === 13) {
            return (
                <span>
                    {setTime(2000)} 
                    {setStart(false)}
                    {setActivity("Resting Mode")}
                    {setPomodoro(pomodoro + 1)}
                </span>
            );
        }
        if (completedCount === 14) {
            return (
                <span>
                    {setTime(2000)} 
                    {setStart(false)}
                    {setActivity("Resting Mode")}
                </span>
            );
        }
        if (completedCount === 15) {
            return (
                <span>
                    {setTime(4000)} 
                    {setStart(false)}
                    {setActivity("Working Mode")}
                </span>
            );
        }
        if (completedCount === 16) {
            return (
                <span>
                    {setTime(4000)} 
                    {setStart(false)}
                    {setActivity("Working Mode")}
                </span>
            );
        }
        if (completedCount === 17) {
            return (
                <span>
                    {setTime(2000)} 
                    {setStart(false)}
                    {setActivity("Resting Mode")}
                    {setPomodoro(pomodoro + 1)}
                </span>
            );
        }
        if (completedCount === 18) {
            return (
                <span>
                    {setTime(2000)} 
                    {setStart(false)}
                    {setActivity("Resting Mode")}
                    {setCompletedCount(3)}
                </span>
            );
        }
    };

    console.log(completedCount);

    const Renderer = ({ minutes, seconds, completed }) => {
        if (completed) {
            //Render a completed state
            {setCompletedCount(completedCount + 1)}
            return Work();
        } else {
            // Render a countdown
            return <span>{zeroPad(minutes, 2)}:{zeroPad(seconds, 2)}</span>;
        }
    };

	return (
		<div className="text-center">
            <p style={{ fontSize: "550%" }} className="text-light">
                <Countdown
                    date={Date.now() + time} //1500000
                    intervalDelay={0}
                    autoStart={false}
                    ref={countdown}
                    renderer={Renderer}
                />
            </p>
            {renderButton()}
            <div className="text-light pt-4">
                {activity}
                <br />
                {pomodoro}
            </div>
		</div>
	);
};

export default Time;
