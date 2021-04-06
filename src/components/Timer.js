import React, { useState, useRef, useEffect } from "react";
import Countdown, { zeroPad } from "react-countdown";
import axios from "axios";

const Time = () => {
	const [start, setStart] = useState(false);
	const [activity, setActivity] = useState("Working Mode");
	const [time, setTime] = useState(3000);
	const [completedCount, setCompletedCount] = useState(0);
	const [long, setLong] = useState("");
	const [pomodoro, setPomodoro] = useState(0);
	const [pomodoroLifeTime, setPomodoroLifeTime] = useState(0);
	const countdown = useRef(null);

	//ask user permission for notifications
	useEffect(() => {
		if (!("Notification" in window)) {
			console.log("This browser does not support desktop notification");
		} else {
			Notification.requestPermission();
		}
	}, []);

	//show notification once timer is done
	useEffect(() => {
		if (activity === "Resting Mode") {
			new Notification("It's time to take a break!");
		}
		if (activity === "Working Mode") {
			new Notification("It's time to start working!");
		}
	}, [activity]);

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
	}, [pomodoro, activity]);

	//finds lifetime pomodoro count from server
	async function fetchLifeTime() {
		let res = await axios.get("http://localhost:3001/lifetime/1");

		let total = res.data.total;

		setPomodoroLifeTime(total);
	}

	//updates lifetime pomodoro count to server
	async function updateLifeTime() {
		let getResponse = await axios.get("http://localhost:3001/lifetime/1");

		let getData = getResponse.data.total;
		const total = getData + 1;

		setPomodoroLifeTime(total);

		let payload = { total: total };

		await axios.patch("http://localhost:3001/lifetime/1", payload);
	}

	//updates daily pomodoro and daily total pomodoro count to server
	async function updateDay() {
        let currentHour = new Date().getHours();
        
		let getResponse = await axios.get('http://localhost:3001/day/1/');

        let getData = getResponse.data[currentHour];
        let count = getData + 1;
        
        let getDataTotal = getResponse.data.total;
        let totalCount = getDataTotal + 1;

		let payload = { [currentHour]: count, total: totalCount };

		await axios.patch("http://localhost:3001/day/1/", payload);
    }

    //resets day's data back to 0 once new day starts
    async function resetDay() {
        let date = ((new Date().getMonth() + 1) + "-" + (new Date().getDate()) + "-" + (new Date().getFullYear()));
        
        let getResponse = await axios.get('http://localhost:3001/day/1/');

        let getData = getResponse.data.date;

        //if date has changed, reset data to 0
        if (date !== getData) {
            var i;

            for (i = 1; i < 25; i++) {
                let payload = { [i]: 0, total: 0, date: date };
                await axios.patch("http://localhost:3001/day/1/", payload);
            }
        }
    }

    //updates weekly and weekly total pomodoro count 
    async function updateWeek() {
        let currentDay = new Date().getDay() + 1; //sunday first day
        let date = ((new Date().getMonth() + 1) + "-" + (new Date().getDate()) + "-" + (new Date().getFullYear()));
        
        let getResponse = await axios.get('http://localhost:3001/week/1/');

        let getData = getResponse.data[currentDay];
        let count = getData + 1;

        let getDataTotal = getResponse.data.total;
        let totalCount = getDataTotal + 1;

        let payload = { [currentDay]: count, total: totalCount, date: date, currentDay: currentDay };

        await axios.patch("http://localhost:3001/week/1/", payload);
    }

    //resets data back to 0 once week has ended
    async function resetWeek() {
        let currentDay = new Date().getDay() + 1; //sunday first day
        const date = ((new Date().getMonth() + 1) + "-" + (new Date().getDate()) + "-" + (new Date().getFullYear()));
        
        let getResponse = await axios.get('http://localhost:3001/week/1/');

        let getDate = getResponse.data.date;

        //if current day has changed to 1 and is not the same date as previously saved, reset data to 0
        if (currentDay === 1 && date !== getDate) {
            var i;

            for (i = 1; i < 8; i++) {
                let payload = { [i]: 0, total: 0, currentDay: currentDay, date: date };
                await axios.patch("http://localhost:3001/week/1/", payload);
            }
        }
    }

    //updates monthly and monthly total pomodoro count 
    async function updateMonth() {
        let currentDay = new Date().getDate(); //day of month
        const date = ((new Date().getMonth() + 1) + "-" + (new Date().getDate()) + "-" + (new Date().getFullYear()));

        let getResponse = await axios.get('http://localhost:3001/month/1/');

        let getData = getResponse.data[currentDay];
        let count = getData + 1;

        let getDataTotal = getResponse.data.total;
        let totalCount = getDataTotal + 1;

        let payload = { [currentDay]: count, total: totalCount, currentDay: currentDay, date: date };

        await axios.patch("http://localhost:3001/month/1/", payload);
    }

    //resets data back to 0 once month has ended
    async function resetMonth() {
        let currentDay = new Date().getDate(); //day of month
        const date = ((new Date().getMonth() + 1) + "-" + (new Date().getDate()) + "-" + (new Date().getFullYear()));
        
        let getResponse = await axios.get('http://localhost:3001/month/1/');

        let getDate = getResponse.data.date;

        //if current day has changed to 1 and is not the same date as previously saved, reset data to 0
        if (currentDay === 1 && date !== getDate) {
            var i;

            for (i = 1; i < 32; i++) {
                let payload = { [i]: 0, total: 0, currentDay: currentDay, date: date };
                await axios.patch("http://localhost:3001/month/1/", payload);
            }
        }
    }

    //updates yearly counts and yearly total count 
    async function updateYear() {
        const currentMonth = new Date().getMonth() + 1;
        
        let getResponse = await axios.get('http://localhost:3001/year/1/');

        let getMonth = getResponse.data[currentMonth];
        let count = getMonth + 1;

        let getTotal = getResponse.data.total;
        let totalCount = getTotal + 1;

        let payload = { [currentMonth]: count, total: totalCount, currentMonth: currentMonth };

        await axios.patch("http://localhost:3001/year/1/", payload);
    }

    async function resetYear() {
        const currentMonth = new Date().getMonth() + 1;

        let getResponse = await axios.get('http://localhost:3001/year/1/');

        let getCurrentMonth = getResponse.data.currentMonth;

        //if current month has changed to 1 and is not the same date as previously saved, reset data to 0
        if (currentMonth === 1 && currentMonth !== getCurrentMonth) {
            var i;

            for (i = 1; i < 13; i++) {
                let payload = { [i]: 0, total: 0, currentMonth: currentMonth };
                await axios.patch("http://localhost:3001/year/1/", payload);
            }
        }
    }

    //resets data back to 0 on page load
    useEffect(() => {
        resetDay();
        resetWeek();
        resetMonth();
        resetYear();
    }, [])

	//fetches + updates data to server once pomodoro updates
	useEffect(() => {
		if (pomodoro === 0) {
            fetchLifeTime();
		}

		if (pomodoro >= 1) {
			updateLifeTime();
            updateDay();
            updateWeek();   
            updateMonth();
            updateYear();
		}
	}, [pomodoro]);

	//Starts and stops timer
	const startButton = () => {
		setStart(true);
		countdown.current.start();
	};

	const stopButton = () => {
		setStart(false);
		countdown.current.stop();
	};

	const renderButton = () => {
		if (start === false) {
			return (
				//renders start button
				<button
					className="btn btn-circle btn-xl cyanButton text-light"
					onClick={() => startButton()}
				>
					Start
				</button>
			);
		}
		if (start === true) {
			return (
				//renders stop button
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
		if (completedCount === 2) {
			//finish working mode
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
			const audioEl = document.getElementsByClassName("audio-element")[0];
			audioEl.play();

			return Work();
		} else {
			// Render a countdown
			return (
				<span>
					{zeroPad(minutes, 2)}:{zeroPad(seconds, 2)}
				</span>
			);
		}
	};

	return (
		<div>
			<div className="justify-left pt-2">
				<p className="text-light pomodoroCounter">{pomodoroLifeTime}</p>
				<p className="pomodoroText text-light">
					<small>Total Pomodoros</small>
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
						className="pet mx-auto d-block pb-5"
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
