import React, { useEffect, useState } from "react";
import Unity, { UnityContext } from "react-unity-webgl"; 

const unityContext = new UnityContext({
	codeUrl: "/Pet/Build/Pet.wasm.unityweb",
	frameworkUrl: "/Pet/Build/Pet.framework.js.unityweb",
	dataUrl: "/Pet/Build/Pet.data.unityweb",
	loaderUrl: "/Pet/Build/Pet.loader.js",
});

const App = ({activity, pomodoroLifeTime}) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [feedPet, setFeedPet] = useState(false);

	useEffect(() => {
		unityContext.on("loaded", () => {
			setIsLoaded(true);
		});
	}, []);

	//runs animation and resets back to idle animation once feedPet state updates
	useEffect(() => {
		let scaleResolution = (pomodoroLifeTime / 2) + 5; //default scale = 5, scale by 1/2
		let changePosition = (.0405 * pomodoroLifeTime) + .369; //default scale y = .369, scale by .0405
		let scaleCloud = (.1 * pomodoroLifeTime) + 1.2 + 100; //default scale = 1.2, scale by .1
		let scaleCamera = (pomodoroLifeTime / 5) + 3; //default scale = 3, scale by 1 at each 5th pomodoro
		var remainder = pomodoroLifeTime % 5;

		if (feedPet === true) {
			unityContext.send("pet", "Eat", "true");

			//dependant on unity animation timing
			setTimeout(() => {
				if (scaleResolution === 205) { //changes at 401 pomodoro total
					unityContext.send("pet", "ShowCloud"); //start cloud anim
					setTimeout(() => {
						unityContext.send("pet", "ShowEarth");
					}, 2500);
					// unityContext.send("pet", "ScaleCloud", scaleCloud); //set cloud size
				}

				//check to see if pomodoro count is a numerator of 5
				if (remainder === 0) {
					unityContext.send("pet", "ChangeCameraSize", scaleCamera);
				}
				unityContext.send("pet", "Eat", "false"); //gameobject, function name, variable passed to unity
				unityContext.send("pet", "SlowScaleResolution", scaleResolution);
				unityContext.send("pet", "SlowChangePosition", changePosition);
				setFeedPet(false);
			}, 5200);
		}

		if (feedPet === false) {
			unityContext.send("pet", "Eat", "false");
		}
	}, [feedPet]);

	//runs animation once finished pomodoro
	useEffect(() => {
		if (activity === "Resting Mode") {
			setFeedPet(true);
		}

		if (activity === "Working Mode") {
			setFeedPet(false);
		}
	}, [activity]);

	//sets pet size, position, scene, world, and camera zoom once unity starts loading
	useEffect(() => {
		let scaleResolution = (pomodoroLifeTime / 2) + 5;
		let changePosition = (.0405 * pomodoroLifeTime) + .369;
		let scaleCamera = (pomodoroLifeTime / 5) + 3; //default scale = 3, scale by 1 at each 5th pomodoro
		let remainder = pomodoroLifeTime % 5;
		
		if (isLoaded === true) {
			unityContext.send("pet", "ScaleResolution", scaleResolution); 
			unityContext.send("pet", "ChangePosition", changePosition); 

			//checks if pomodoro count is a numerator of 5
			if (remainder === 0) {
				unityContext.send("pet", "ChangeCameraSizeOnLoad", scaleCamera); //sets camera size without slowing down
			}

			//removes decimal from scale camera when pomodoro count is not a multiple of 5
			if (remainder !== 0) {
				let reducedScaleCamera = ~~scaleCamera;

				unityContext.send("pet", "ChangeCameraSizeOnLoad", reducedScaleCamera);
			}

			//once pet size scale is above 205 => show earth, otherwise show mountain
			if (scaleResolution <= 205) { 
				unityContext.send("pet", "ShowMountain");
			}

			if (scaleResolution > 205) {
				unityContext.send("pet", "ShowEarth");
			}
		}
	}, [isLoaded])

	return (
		<div>
			<Unity
				style={{
					position: "absolute",
					width: "100%",
					height: "100%",
					top: 0,
					left: 0,
					margin: "auto",
					visibility: isLoaded ? "visible" : "hidden",
				}}
				className="unity"
				unityContext={unityContext}
				devicePixelRatio={2} //set graphics quality
			/>
		</div>
	);
};

export default App;

