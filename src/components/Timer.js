import React, {useState, useRef, useEffect} from 'react';
import Countdown, {zeroPad} from 'react-countdown';
import '../css/App.css';

const Time = () => {
    const [start, setStart] = useState(false);
    const [activity, setActivity] = useState("Working Mode");
    const [time, setTime] = useState(3000);
    const [completedCount, setCompletedCount] = useState(0);
    const [long, setLong] = useState("");
    const [pomodoro, setPomodoro] = useState(0);
    const countdown = useRef(null);

    //ask user permission for notifications
    useEffect(() => {
        if (!("Notification" in window)) {
            console.log("This browser does not support desktop notification");
        } else {
            Notification.requestPermission();
        }
    }, [])

    //show notification once timer is done
    useEffect(() => {
        if (activity === "Resting Mode") {
            new Notification("It's time to take a break!");
        }
        if (activity === "Working Mode") {
            new Notification("It's time to start working!");
        }
    }, [activity])

    //long resting mode checker
    useEffect(() => {
        //checks to see if number is multiple of 5
        var remainder = pomodoro % 5;
        
        //check pomodoro multiple and set long resting mode
        if (remainder === 0) {
            if (activity === "Resting Mode") {
                setTime(9000);
                setLong("Long");
            }
            if (activity === "Working Mode") {
                setTime(4000);
                setLong("");
            }
        }
    }, [pomodoro, activity])

    //Starts and stops timer
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
    
    //Ran when timer = 00:00
    //Using multiple IF statements because countdown-react.js requires use of a function
    //Will NOT let you only set a state or run useEffect
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
                    {setCompletedCount(3)}
                </span>
            );
        }
    };

    //Countdown Renderer
    const Renderer = ({ minutes, seconds, completed }) => {
        if (completed) {
            //Render a completed state
            {setCompletedCount(completedCount + 1)}

            //plays a sounds
            const audioEl = document.getElementsByClassName("audio-element")[0]
            audioEl.play()

            return Work();
        } else {
            // Render a countdown
            return <span>{zeroPad(minutes, 2)}:{zeroPad(seconds, 2)}</span>;
        }
    };

	return (
        <div>
            <div className="justify-left pt-2">
                <p className="text-light pomodoroCounter">
                    {pomodoro}
                </p>
                <p className="pomodoroText text-light">
                    <small>Pomodoros</small>
                </p>
            </div>
            <div 
                className="container"
                style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <div className="text-center">
                    <audio className="audio-element">
                        <source src="http://soundbible.com/grab.php?id=1599&type=mp3"></source>
                    </audio>
                    <p className="text-light text-center">Start feeding your pet!</p>
                    <p style={{ fontSize: "550%" }} className="text-light">
                        <Countdown
                            date={Date.now() + time} //1500000 = 25:00 minutes
                            intervalDelay={0}
                            autoStart={false}
                            ref={countdown}
                            renderer={Renderer}
                        />
                    </p>
                    <img
                        src="../../img/white_cat.png"
                        className="w-25 mx-auto d-block pb-5"
                        alt=""
                    />
                    {renderButton()}
                    <div className="text-light pt-4">
                        {long} {activity}
                    </div>
                </div>
            </div>
        </div>
	);
};

export default Time;
