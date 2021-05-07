import React, { useState, useRef, useEffect } from "react";
import Countdown, { zeroPad } from "react-countdown";
import axios from "axios";
import Pet from "./Pet";

const Time = ({userId}) => {
	const [start, setStart] = useState(false);
	const [activity, setActivity] = useState("Working Mode");
	const [time, setTime] = useState(1500000);
	const [completedCount, setCompletedCount] = useState(0);
	const [long, setLong] = useState("");
	const [pomodoro, setPomodoro] = useState(0);
	const [pomodoroLifeTime, setPomodoroLifeTime] = useState(0);
	const countdown = useRef(null);

	const SERVER = `${process.env.REACT_APP_NODE_SERVER}`;

	//ask user permission for notifications
	useEffect(() => {
		if (!("Notification" in window)) {
			console.log("This browser does not support desktop notifications");
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
				setTime(900000); //15 minutes
				setLong("Long");
			}
			if (activity === "Working Mode") {
				setTime(1500000);
				setLong("");
			}
		}
	}, [pomodoro, activity]);

	function postDay() {
		const date =
			new Date().getMonth() +
			"-" +
			new Date().getDate() +
			"-" +
			new Date().getFullYear();
		let payload = {
			id: `${userId}`, 
			total: 0, 
			date: date, 
			0: 0,
			1: 0,
			2: 0,
			3: 0,
			4: 0,
			5: 0,
			6: 0,
			7: 0,
			8: 0,
			9: 0,
			10: 0,
			11: 0,
			12: 0,
			13: 0,
			14: 0,
			15: 0,
			16: 0,
			17: 0,
			18: 0,
			19: 0,
			20: 0,
			21: 0,
			22: 0,
			23: 0
		};
		return axios.post(SERVER + `/day`, payload);
	}

	function postWeek() {
		const date =
			new Date().getMonth() +
			"-" +
			new Date().getDate() +
			"-" +
			new Date().getFullYear();
		let currentDay = new Date().getDay();
		let payload = {
			id: `${userId}`, 
			total: 0, 
			date: date, 
			currentDay: currentDay,
			0: 0,
			1: 0,
			2: 0,
			3: 0,
			4: 0,
			5: 0,
			6: 0
		};
		return axios.post(SERVER + `/week`, payload);
	}

	function postMonth() {
		const date =
			new Date().getMonth() +
			"-" +
			new Date().getDate() +
			"-" +
			new Date().getFullYear();
		let currentDay = new Date().getDay();
		let payload = {
			id: `${userId}`, 
			total: 0, 
			date: date, 
			currentDay: currentDay,
			1: 0,
			2: 0,
			3: 0,
			4: 0,
			5: 0,
			6: 0,
			7: 0,
			8: 0,
			9: 0,
			10: 0,
			11: 0,
			12: 0,
			13: 0,
			14: 0,
			15: 0,
			16: 0,
			17: 0,
			18: 0,
			19: 0,
			20: 0,
			21: 0,
			22: 0,
			23: 0,
			24: 0,
			25: 0,
			26: 0,
			27: 0,
			28: 0,
			29: 0,
			30: 0,
			31: 0,
		};
		return axios.post(SERVER + `/month`, payload);
	}

	function postYear() {
		const currentMonth = new Date().getMonth();
		let payload = {
			id: `${userId}`, 
			total: 0, 
			currentMonth: currentMonth,
			0: 0,
			1: 0,
			2: 0,
			3: 0,
			4: 0,
			5: 0,
			6: 0,
			7: 0,
			8: 0,
			9: 0,
			10: 0,
			11: 0
		};
		return axios.post(SERVER + `/year`, payload);
	}

	function postLifetime() {
		let payload = { id: `${userId}`, total: 0 };
		return axios.post(SERVER + `/lifetime`, payload);
	}

	//finds lifetime pomodoro count from server
	//if userId isnt in DB, then set new placeholder data for that userId
	function fetchLifeTime() {
		axios.get(SERVER + `/lifetime/${userId}`)
			.then(function (response) {
				let total = response.data.total;
				setPomodoroLifeTime(total);
			})
			.catch(function (error) {
				if (error.response) {
					Promise.all([postDay(), postWeek(), postMonth(), postYear(), postLifetime()]);
				}
			})
	}

	useEffect(() => {
		if (pomodoro === 0 && userId !== null) {
			fetchLifeTime();
		}
	}, [userId])

	//updates lifetime pomodoro count to server
	function updateLifeTime() {
		axios.get(SERVER + "/lifetime/1")
			.then(function (response) {
				let getData = response.data.total;
				const total = getData + 1;

				setPomodoroLifeTime(total);

				let payload = { total: total };

				axios.patch(SERVER + "/lifetime/1", payload);
			});
	}

	//updates daily pomodoro and daily total pomodoro count to server
	function updateDay() {
		axios.get(SERVER + "/day/1/")
			.then(function (response) {
				let currentHour = new Date().getHours();

				let getData = response.data[currentHour];
				let count = getData + 1;

				let getDataTotal = response.data.total;
				let totalCount = getDataTotal + 1;

				let payload = { [currentHour]: count, total: totalCount };

				axios.patch(SERVER + "/day/1/", payload);
			});
	}

	//resets day's data back to 0 once new day starts
	function resetDay() {
		axios.get(SERVER + "/day/1/")
			.then(function (response) {
				let date =
					new Date().getMonth() +
					"-" +
					new Date().getDate() +
					"-" +
					new Date().getFullYear();

				let getData = response.data.date;

				//if date has changed, reset all data to 0
				if (date !== getData) {
					var i;
		
					for (i = 0; i < 24; i++) {
						let payload = { [i]: 0, total: 0, date: date };
						axios.patch(SERVER + "/day/1/", payload);
					}
				}
			});
	}

	//updates weekly and weekly total pomodoro count
	function updateWeek() {
		axios.get(SERVER + "/week/1/")
			.then(function (response) {
				let currentDay = new Date().getDay();
				let date =
					new Date().getMonth() +
					"-" +
					new Date().getDate() +
					"-" +
					new Date().getFullYear();

				let getData = response.data[currentDay];
				let count = getData + 1;

				let getDataTotal = response.data.total;
				let totalCount = getDataTotal + 1;

				let payload = {
					[currentDay]: count,
					total: totalCount,
					date: date,
					currentDay: currentDay,
				};

				axios.patch(SERVER + "/week/1/", payload);
			});
	}

	//resets data back to 0 once week has ended
	function resetWeek() {
		axios.get(SERVER + "/week/1/")
			.then(function (response) {
				let currentDay = new Date().getDay();
				const date =
					new Date().getMonth() +
					"-" +
					new Date().getDate() +
					"-" +
					new Date().getFullYear();

				let getDate = response.data.date;

				//if current day has changed to 0 and is not the same date as previously saved, reset data to 0
				if (currentDay === 0 && date !== getDate) {
					var i;

					for (i = 0; i < 7; i++) {
						let payload = { [i]: 0, total: 0, currentDay: currentDay, date: date };
						axios.patch(SERVER + "/week/1/", payload);
					}
				}
			});
	}

	//updates monthly and monthly total pomodoro count
	function updateMonth() {
		axios.get(SERVER + "/month/1/")
			.then(function (response) {
				let currentDay = new Date().getDate(); //day of month
				const date =
					new Date().getMonth() +
					"-" +
					new Date().getDate() +
					"-" +
					new Date().getFullYear();

				let getData = response.data[currentDay];
				let count = getData + 1;

				let getDataTotal = response.data.total;
				let totalCount = getDataTotal + 1;

				let payload = {
					[currentDay]: count,
					total: totalCount,
					currentDay: currentDay,
					date: date,
				};

				axios.patch(SERVER + "/month/1/", payload);
			});
	}

	//resets data back to 0 once month has ended
	function resetMonth() {
		axios.get(SERVER + "/month/1/")
			.then(function (response) {
				let currentDay = new Date().getDate(); //day of month
				const date =
					new Date().getMonth() +
					"-" +
					new Date().getDate() +
					"-" +
					new Date().getFullYear();
				
				let getDate = response.data.date;

				//if current day has changed to 1 and is not the same date as previously saved, reset data to 0
				if (currentDay === 1 && date !== getDate) {
					var i;
		
					for (i = 1; i < 32; i++) {
						let payload = { [i]: 0, total: 0, currentDay: currentDay, date: date };
						axios.patch(SERVER + "/month/1/", payload);
					}
				}
			});
	}

	//updates yearly counts and yearly total count
	function updateYear() {
		axios.get(SERVER + "/year/1/")
			.then(function (response) {
				const currentMonth = new Date().getMonth();

				let getMonth = response.data[currentMonth];
				let count = getMonth + 1;

				let getTotal = response.data.total;
				let totalCount = getTotal + 1;

				let payload = {
					[currentMonth]: count,
					total: totalCount,
					currentMonth: currentMonth,
				};

				axios.patch(SERVER + "/year/1/", payload);
			});
	}

	function resetYear() {
		axios.get(SERVER + "/year/1/")
			.then(function (response) {
				const currentMonth = new Date().getMonth();

				let getCurrentMonth = response.data.currentMonth;

				//if current month has changed to 0 and is not the same date as previously saved, reset data to 0
				if (currentMonth === 0 && currentMonth !== getCurrentMonth) {
					var i;

					for (i = 0; i < 12; i++) {
						let payload = { [i]: 0, total: 0, currentMonth: currentMonth };
						axios.patch(SERVER + "/year/1/", payload);
					}
				}
			});
	}

	//resets data back to 0 on page load
	useEffect(() => {
		if (pomodoro === 0) {
			resetDay();
			resetWeek();
			resetMonth();
			resetYear();
		}
	}, []);

	//fetches + updates data to server once pomodoro updates
	useEffect(() => {
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
	const Work = () => {
		if (completedCount === 0) {
			return (
				<span>
					{setTime(300000)}
					{setStart(false)}
					{setActivity("Working Mode")}
				</span>
			);
		}
		if (completedCount === 1) {
			return (
				<span>
					{setTime(300000)}
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
					{setTime(300000)}
					{setStart(false)}
					{setActivity("Resting Mode")}
				</span>
			);
		}
		if (completedCount === 3) {
			return (
				<span>
					{setTime(1500000)}
					{setStart(false)}
					{setActivity("Working Mode")}
				</span>
			);
		}
		if (completedCount === 4) {
			return (
				<span>
					{setTime(1500000)}
					{setStart(false)}
					{setPomodoro(pomodoro + 1)}
					{setActivity("Working Mode")}
				</span>
			);
		}
		if (completedCount === 5) {
			return (
				<span>
					{setTime(300000)}
					{setStart(false)}
					{setActivity("Resting Mode")}
				</span>
			);
		}
		if (completedCount === 6) {
			return (
				<span>
					{setTime(300000)}
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
			{
				setCompletedCount(completedCount + 1);
			}

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
			<div className="pomodoroCounterContainer pt-3">
				<p className="text-light pomodoroCounter">{pomodoroLifeTime}</p>
			</div>
			<div className="pomodoroContainer">
				<div className="text-center">
					<audio className="audio-element">
						<source src="http://soundbible.com/grab.php?id=1599&type=mp3"></source>
					</audio>
					<div className="text-light activity">
						{long} {activity}
					</div>
					<div className="countdownContainer">
						<p
							style={{ fontSize: "500%", fontWeight: "100" }}
							className="text-light countdown"
						>
							<Countdown
								date={Date.now() + time} //1500000 = 25:00 minutes
								intervalDelay={0}
								autoStart={false}
								ref={countdown}
								renderer={Renderer}
							/>
						</p>
						{renderButton()}
					</div>
				</div>
			</div>
			<Pet activity={activity} pomodoroLifeTime={pomodoroLifeTime} />
		</div>
	);
};

export default Time;

