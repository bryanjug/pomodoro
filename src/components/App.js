import { Link } from "react-router-dom";
import GoogleBtn from "./GoogleBtn";
import React, { useRef, useState, useEffect } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Timer from './Timer';
import DayStats from './DayStats';
import WeekStats from './WeekStats';
import MonthStats from './MonthStats';
import YearStats from './YearStats';
import ChangeTimer from './ChangeTimer';
import Leaderboards from './Leaderboards';

//TODO:
//(DONE) COMPLETION METHOD -> CREATE TIMER
//(DONE) RENDER TEXT OF CURRENT ACTIVITY (RESTING OR WORKING)
//(DONE) CREATE USEEFFECT FOR SETTING LONG BREAK + SHORT BREAK + WORK ON TIME VARIABLE BASED ON POMODORO COUNT AND ACTIVITY STATES
//(DONE) SEND USER NOTIFICATIONS
//(DONE) START SOUND
//(DONE) SHORTEN IF STATEMENTS FOR COMPLETION
//(DONE) CREATE USESTATE FOR LONG KEY WORD AND ADD IT NEXT TO THE ACTIVITY
//(DONE) COUNTING COMPLETIONS
//(DONE) STOPPING === NO COUNTED COMPLETION
//(DONE) COMPLETION COUNTER AT TOP OF SCREEN
//(DONE) IMPORT REACT-ROUTER-DOM
//(DONE) CREATE LINKS, ROUTES, AND BROWSERROUTERS
//(DONE) STYLE LINKS INTO BUTTONS
//(DONE) CREATE SERVER FOR STATISTICS
//(DONE) MAKE AXIOS REQUEST
//(DONE) CREATE STATISTICS PAGE
//(DONE) ADD LIFETIME TOTAL AND DISPLAY ON TOP OF SCREEN
//(DONE) ADD POMODORO TOTALS FOR CURRENT HOUR AND TOTAL HOUR COUNT TO SERVER
//(DONE) REMOVE OLD DATA ONCE NEW DAY STARTS
//(DONE) ADD POMODORO TOTALS FOR CURRENT WEEK AND TOTAL WEEK COUNT TO SERVER
//(DONE) REMOVE OLD DATA ONCE NEW WEEK STARTS
//(DONE) ADD POMODORO TOTALS FOR CURRENT MONTH AND TOTAL MONTH COUNT TO SERVER
//(DONE) REMOVE OLD DATA ONCE NEW MONTH STARTS
//(DONE) ADD POMODORO TOTALS FOR CURRENT YEAR AND TOTAL YEAR COUNT TO SERVER
//(DONE) REMOVE OLD DATA ONCE NEW YEAR STARTS
//(DONE) CREATE PLACEHOLDER DAY GRAPH
//(DONE) STYLE NAVIGATION BUTTONS FOR STATS
//(DONE) MOVE ROUTES TO INDEX.JS
//(DONE) SET UP NAVIGATION WITH ROUTES + LINKS FOR EACH GRAPH
//(DONE) RESPONSIVE DESIGN GRAPHS
//(DONE) CREATE ALL PLACEHOLDER GRAPHS
//(DONE) CONNECT GRAPHS TO SERVER (DAY(DONE), WEEK(), MONTH(), YEAR())
//(DONE) CONNECT NECK AND EVERYTHING ELSE IN BLENDER TO CAT AND EXPORT AS FBX
//(DONE) CREATE BASIC ANIMATION IN UNITY
//(DONE) CREATE WEBGL BUILD
//(DONE) IMPORT REACT-UNITY-WEBGL AND SHOW CAT
//(DONE) ON CLICK, RUN ANIMATION
//(DONE) SET WORLD UNDERNEATH CAT
//(DONE) MOVE WEBGL APP INTO POMODORO APP
//(DONE) REMOVE ASYNC AND AWAIT
//(DONE) MOVE ELEMENTS ON TOP OF WEBGL
//(DONE) ADD FEEDING ANIMATION
//(DONE) SIZE CHANGES AFTER EACH POMODORO
//(DONE) SET PET SIZE ACCORDING TO POMODORO COUNT
//(DONE) CREATE NEW WORLD AND ASSETS
//(DONE) SHOW/HIDE OBJECTS
//(DONE) FIX PET SIZE AT FIRST LOAD ACCORDING TO POMODORO COUNT
//(DONE) CREATE CAMERA SLOW ZOOM OUT AND QUICK ZOOM ON UNITY LOAD
//(DONE) SLOW DOWN GROWTH
//(DONE) SCALE PET SIZE, CAMERA, AND CLOUD ACCORDINGLY
//(DONE) FIX GIT -> UPGRADE TO LARGE FILE SYSTEM
//(DONE) ADD SKYBOX
//(DONE) FIX SKYBOX POSITION
//(DONE) CHANGE 3D WORLDS ONCE POMODORO REACHES CERTAIN NUMBER
//(DONE) REMOVE COUNTER TEXT
//(DONE) CHECK IF SLOW PET SIZE INCREASE INSTEAD OF CLOUD ANIM LOOKS BETTER
//(DONE) FIX SHADOWS
//(DONE) COVER SCREEN WITH CLOUDS ONCE WORLD CHANGES
//(DONE) SET CHART TO BE RESPONSIVE ON MOUNT AND ON MANUAL SCREEN SIZE CHANGE
//(DONE) FIX SERVER(DONE), STATS.JS(DONE), AND TIMER.JS(DONE) SO DB STARTS AT 0
//(DONE) DISPLAY TOTALS ON STATS.JS PAGES
//(DONE) PERFECT RESPONSIVE TIMER (DONE), STATS (DONE), AND WEBGL (DONE)
//(DONE) CHANGE SKYBOX ON EARTH DISPLAY
//(DONE) SET COUNTDOWN TIMERS TO 25 and 5
//(DONE) DESIGN AND CREATE GOOGLE LOG IN BUTTON
//(DONE) ADD ALERT COVERING SCREEN
//(DONE) FIX RESPONSIVE ALERT
//(DONE) SLIDE NAV MENU FROM RIGHT
//(DONE) SHOW / HIDE GOOGLE LOGIN BUTTON
//(DONE) SET NAV ICONS
//(DONE) FIX GOOGLE BUTTON STYLING
//(DONE) RESPONSIVE NAV MENU
//(DONE) CHANGE ROUTERS WITH COMPONENTS AS CHILDREN
//(DONE) MOVE USERID STATES FROM ROUTERS TO CHILDREN
//(DONE) SHOW ALERT AFTER GOOGLE BUTTON LOADS AND WHEN USER IS NOT LOGGED IN
//(DONE) CONNECT DB AND SERVER FOR INDIVIDUAL GOOGLE ID'S
//(DONE) ON LOGIN => AXIOS GET FOR USERID, IF NON EXISTENT, AXIOS POST TEMPLATE DATA
//(DONE) RUN RESET FUNCTIONS WHILE USER IS STILL IN THE APP AND THE DAY CHANGES
//(DONE) INSERT USERID FOR EACH AXIOS REQUEST IN TIMER(DONE) AND STATS(DONE)
//(DONE) REQUIRE LOG IN TO SHOW STATS
//(DONE) REMOVE LOOPED PATCH PAYLOADS
//(DONE) FIX RESPONSIVE HAMGBURGER ICON
//(DONE) RESET ALL FILES WITH API FILE
//(DONE) CHANGE USERID !== NULL TO JUST USERID
//(DONE) SHOW SPINNING LOADER WHEN ON STATS PAGE UNTIL USERID AND AXIOS IS CONNECTED
//(DONE) HIDE SPINNING LOADER WHILE LOGGED OFF ON TIMER
//(DONE) AXIOS REQUEST SETINTERVAL UNTIL DB SERVER IS ONLINE FOR STATS
//(DONE) CANCEL AXIOS REQUESTS ON WINDOW CHANGE FOR STATS
//(DONE) SHOW SPINNING LOADER WHILE CONNECTING TO DB ON TIMER AFTER USER LOGS IN
//(DONE) AXIOS REQUEST SETINTERVAL UNTIL DB SERVER IS ONLINE FOR TIMER
//(DONE) CANCEL AXIOS REQUESTS ON WINDOW CHANGE FOR TIMER
//(DONE) CREATE NEWUSER.JS TO POST A NEW USER
//(DONE) CONNECT POMODORO-SERVER GIT REPO TO HEROKU
//(DONE) HOST JSON-SERVER ON HEROKU
//(DONE) CONNECT APP TO HEROKU SERVER
//(DONE) HOST REACT APP ON NETLIFY
//(DONE) FIX RELOADING PAGE ERROR WHEN ON A ROUTE LINK
//(DONE) SHOW SPINNING LOADER BEFORE UNITY IS LOADED
//(DONE) FIX PET SIZE NOT MATCHING TO DB ON MOUNT 
//(DONE) FIX SPINNING LOADER FOR UNITY LOADING
//(DONE) ADD LEADERBOARDS FOR POMODORO COUNT
//(DONE) DISPLAY 10 USERS FROM LIFETIME DB
//(DONE) ADD BUTTONS TO SEE NEXT 10 USERS
//(DONE) HIDE LEFT BUTTON AT START AND HIDE RIGHT BUTTON AT END OF USERS 
//(DONE) ON BUTTON CLICK CHANGE STATE FOR AXIOS TO SET START TO +10
//(DONE) RESPONSIVE LEADERBOARDS
//(DONE) ADD TIME CHANGER ROUTE WITH ALERT ON CLICK
//() RESPONSIVE TIME CHANGER

const App = () => {
	const [userId, setUserId] = useState(null);
	const [loadingStyle, setLoadingStyle] = useState("text-center loading displayNone");
	const [userName, setUserName] = useState(null);
	const [workTime, setWorkTime] = useState(1500000);
	const [restTime, setRestTime] = useState(300000);
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
					<Timer userId={userId} setLoadingStyle={setLoadingStyle} userName={userName} restTime={restTime} workTime={workTime} />
				</Route>
				<Route path="/stats/day">
					<DayStats userId={userId} setLoadingStyle={setLoadingStyle} userName={userName} />
				</Route>
				<Route path="/stats/week">
					<WeekStats userId={userId} setLoadingStyle={setLoadingStyle} userName={userName} />
				</Route>
				<Route path="/stats/month">
					<MonthStats userId={userId} setLoadingStyle={setLoadingStyle} userName={userName} />
				</Route>
				<Route path="/stats/year">
					<YearStats userId={userId} setLoadingStyle={setLoadingStyle} userName={userName} />
				</Route>
				<Route path="/changetimer">
					<ChangeTimer setWorkTime={setWorkTime} setRestTime={setRestTime} />
				</Route>
				<Route path="/leaderboards">
					<Leaderboards setLoadingStyle={setLoadingStyle} userName={userName} />
				</Route>

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
						<Link to="/leaderboards" onClick={hideNav}>
							<li>Leaderboards</li>
						</Link>
						<li>
							<GoogleBtn setUserId={setUserId} userId={userId} loadingStyle={loadingStyle} setUserName={setUserName} />
						</li>
					</ul>
				</div>
			</Router>
		</div>
	);
};

export default App;
