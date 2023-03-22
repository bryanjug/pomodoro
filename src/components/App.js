import { Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Timer from './Timer';
import DayStats from './DayStats';
import WeekStats from './WeekStats';
import MonthStats from './MonthStats';
import YearStats from './YearStats';
import ChangeTimer from './ChangeTimer';
import Unity, { UnityContext } from "react-unity-webgl";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const unityContext = new UnityContext({
    loaderUrl: "build/WebGL Builds.loader.js",
    dataUrl: "build/WebGL Builds.data",
    frameworkUrl: "build/WebGL Builds.framework.js",
    codeUrl: "build/WebGL Builds.wasm",
});

const App = () => {
	const [loadingStyle, setLoadingStyle] = useState("text-center loading displayInline !important");
	const [workTime, setWorkTime] = useState(1000); //1500000
	const [restTime, setRestTime] = useState(1000); //300000
	const nav = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(()=> {
        
    }, [location.pathname])

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
        navigate("/");
    }

    async function LinkToStats () {
        nav.current.style.right = "-60%";
        //closes unity and links to page
        await unityContext.quitUnityInstance()
        navigate("/stats/day");
    }

    async function LinkToChangeTimer () {
        nav.current.style.right = "-60%";
        await unityContext.quitUnityInstance()
        navigate("/changetimer");
    }

	return (
		<div>
            <Routes>
                <Route 
                    exact path="/" 
                    element={
                        <Timer 
                            setLoadingStyle={setLoadingStyle}
                            restTime={restTime} 
                            workTime={workTime} 
                            unityContext={unityContext}
                        />
                    }
                />
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
                <Route 
                    path="/changetimer"
                    element={
                        <ChangeTimer 
                            setWorkTime={setWorkTime}
                            setRestTime={setRestTime} 
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
                    <button to="/" onClick={() => LinkToHome()}>
                        <li>Pomodoro</li>
                    </button>
                    <button onClick={() => LinkToStats()}>
                        <li>Statistics</li>
                    </button>
                    <button onClick={() => LinkToChangeTimer()}>
                        <li>Change Timer</li>
                    </button>
                </ul>
            </div>
		</div>
	);
};

export default App;
