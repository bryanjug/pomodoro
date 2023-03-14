import { Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Timer from './Timer';
import DayStats from './DayStats';
import WeekStats from './WeekStats';
import MonthStats from './MonthStats';
import YearStats from './YearStats';
import ChangeTimer from './ChangeTimer';

const App = () => {
	const [loadingStyle, setLoadingStyle] = useState("text-center loading displayNone");
	const [workTime, setWorkTime] = useState(1000);
	const [restTime, setRestTime] = useState(1000);
	const nav = useRef(null);

	//hides nav when clicked outside of div
	function useOutsideAlerter(ref) {
		useEffect(() => {
			function handleClickOutside(event) {
				if (ref.current && !ref.current.contains(event.target) && nav.current.style.right === "0px") {
					nav.current.style.right = "-60%";
				}
			}
	
			// Bind the event listener
			document.addEventListener("mousedown", handleClickOutside);
			return () => {
				// Unbind the event listener on clean up
				document.removeEventListener("mousedown", handleClickOutside);
			};

		}, [ref]);
	}

	useOutsideAlerter(nav);

	function showNav() {
		nav.current.style.right = "0px";
	}

	function hideNav() {
		nav.current.style.right = "-60%";
	}

	return (
		<div>
			<Router>
				<Route exact path="/">
					<Timer setLoadingStyle={setLoadingStyle} restTime={restTime} workTime={workTime} />
				</Route>
				<Route path="/stats/day">
					<DayStats setLoadingStyle={setLoadingStyle} />
				</Route>
				<Route path="/stats/week">
					<WeekStats setLoadingStyle={setLoadingStyle} />
				</Route>
				<Route path="/stats/month">
					<MonthStats setLoadingStyle={setLoadingStyle} />
				</Route>
				<Route path="/stats/year">
					<YearStats setLoadingStyle={setLoadingStyle} />
				</Route>
				<Route path="/changetimer">
					<ChangeTimer setWorkTime={setWorkTime} setRestTime={setRestTime} />
				</Route>
				{/* <Route path="/leaderboards">
					<Leaderboards setLoadingStyle={setLoadingStyle} />
				</Route> */}

				<div className="mhead">
					<img className="menu-ham" src="/img/hamburger.png" onClick={showNav} alt="" />
				</div>
				<div className="menu" ref={nav}>
					<div className="close-menu">
						<img src="/img/exit.png" onClick={hideNav} className="menu-exit" alt="" />
					</div>
					<ul>
						<Link to="/" onClick={hideNav}>
							<li>Pomodoro</li>
						</Link>
						<Link to="/stats/day" onClick={hideNav}>
							<li>Statistics</li>
						</Link>
						<Link to="/changetimer" onClick={hideNav}>
							<li>Change Timer</li>
						</Link>
						{/* <Link to="/leaderboards" onClick={hideNav}>
							<li>Leaderboards</li>
						</Link> */}
						{/* <li>
							<GoogleBtn setUserId={setUserId} loadingStyle={loadingStyle} setUserName={setUserName} />
						</li> */}
					</ul>
				</div>
			</Router>
		</div>
	);
};

export default App;
