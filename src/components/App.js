import { Link } from "react-router-dom";
import "../css/App.css";

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
//() SET PET SIZE ACCORDING TO POMODORO COUNT
//() ADD GROWTH SIZE AND DISPLAY ON SCREEN
//() CREATE NEW BACKGROUND SCENERY
//() CHANGE 3D WORLDS ONCE SIZE REACHES CERTAIN NUMBER
//() PERFECT RESPONSIVE TIMER, STATS, AND WEBGL
//() SET COUNTDOWN TIMERS TO 25 and 5
//() (OPTIONAL) ADD LEADERBOARDS

const App = () => {
	return (
        <div>
			<div className="row fixed-bottom">
                <div className="col-sm-12 btn-group" role="group">
                    <Link to="/" className="w-100 navigation">
                        <button type="button" className="btn w-100 btn-secondary navigation navigationDividerRight">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                className="bi bi-alarm"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                            </svg>
                        </button>
                    </Link>
                    <Link to="/stats/day" className="w-100 navigation">
                        <button
                            type="button"
                            className="btn btn-secondary w-100 navigation navigationDividerLeft"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                className="bi bi-bar-chart-line"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z" />
                            </svg>
                        </button>
                    </Link>
				</div>
			</div>
		</div>
	);
};

export default App;
