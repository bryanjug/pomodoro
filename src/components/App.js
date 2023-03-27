import { Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Timer from './Timer';
import DayStats from './DayStats';
import WeekStats from './WeekStats';
import MonthStats from './MonthStats';
import YearStats from './YearStats';
import ChangeTimer from './ChangeTimer';
import { UnityContext } from "react-unity-webgl";
import { useNavigate } from "react-router-dom";

const unityContext = new UnityContext({
    loaderUrl: "build/build.loader.js",
    dataUrl: "build/build.data",
    frameworkUrl: "build/build.framework.js",
    codeUrl: "build/build.wasm",
});

const App = () => {
	const [loadingStyle, setLoadingStyle] = useState("text-center loading displayInline !important");
	const [workTime, setWorkTime] = useState(1500000); //1500000
	const [restTime, setRestTime] = useState(300000); //300000
	const nav = useRef(null);
    const navigate = useNavigate();

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

    async function LinkToHome () {
        nav.current.style.right = "-60%";
        window.location.href = "https://react-unity-webgl-test.netlify.app";
    }

    async function LinkToStats () {
        nav.current.style.right = "-60%";
        //closes unity and links to page
        await unityContext.quitUnityInstance()
        navigate("/stats/day");
    }

	return (
		<div>
            <Routes>
                <Route exact path='/' component={() => {
                    window.location.href = 'https://react-unity-webgl-test.netlify.app';
                    return null;
                }}/>
                <Route 
                    path="/stats/day"
                    element={
                        <DayStats 
                            setLoadingStyle={setLoadingStyle} 
                        />
                    }
                />
                <Route 
                    path="/stats/week"
                    element={
                        <WeekStats 
                            setLoadingStyle={setLoadingStyle} 
                        />
                    }
                />
                <Route 
                    path="/stats/month"
                    element={
                        <MonthStats 
                            setLoadingStyle={setLoadingStyle} 
                        />
                    }
                />
                <Route 
                    path="/stats/year"
                    element={
                        <YearStats 
                            setLoadingStyle={setLoadingStyle} 
                        />
                    }
                />
            </Routes>
            <div className="mhead">
                <img className="menu-ham" src="/img/hamburger.png" onClick={showNav} alt="" />
            </div>
            <div className="menu" ref={nav}>
                <div className="close-menu">
                    <img src="/img/exit.png" onClick={hideNav} className="menu-exit" alt="" />
                </div>
                <ul>
                    <button onClick={() => LinkToHome()}>
                        <li>Pomodoro</li>
                    </button>
                    <button onClick={() => LinkToStats()}>
                        <li>Statistics</li>
                    </button>
                </ul>
            </div>
		</div>
	);
};

export default App;
