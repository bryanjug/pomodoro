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
	const [message, setMessage] = useState("-");
	const [feedPet, setFeedPet] = useState(false);

	useEffect(() => {
		unityContext.on("Sayx", (message) => {
			setMessage(message);
		});

		unityContext.on("loaded", () => {
			setIsLoaded(true);
		});

		unityContext.on("error", (message) => {
			console.log("AN ERROR OCCURED", message);
		});

		unityContext.on("debug", (message) => {
			console.log("GOT A LOG", message);
		});
	}, []);

	//runs animation and resets back to idle animation once feedPet state updates
	useEffect(() => {
		let scaleResolution = (pomodoroLifeTime / 2) + 5; //default scale = 5, scale by 1/2
		let changePosition = (.0405 * pomodoroLifeTime) + .369; //default scale y = .369, scale by .0405
		let scaleCloud = (.1 * pomodoroLifeTime) + 1.2; //default scale = 1.2, scale by .1
		let scaleCamera = (pomodoroLifeTime / 5) + 3; //default scale = 3, scale by 1 at each 5th pomodoro
		var remainder = pomodoroLifeTime % 5;

		if (feedPet === true) {
			unityContext.send("pet", "Eat", "true");

			//dependant on unity animation timing
			let first = setTimeout(() => {
				unityContext.send("pet", "ScaleCloud", scaleCloud); //set cloud size

				if (remainder === 0) {
					unityContext.send("pet", "ChangeCameraSize", scaleCamera);
				}

				unityContext.send("pet", "ShowCloud"); //start cloud anim
				unityContext.send("pet", "Eat", "false"); //gameobject, function name, variable passed to unity
				setFeedPet(false);
			}, 5145);

			let second = setTimeout(() => {
				unityContext.send("pet", "ScaleResolution", scaleResolution);
				unityContext.send("pet", "ChangePosition", changePosition);
			}, 5350);
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

	//sets pet size, position, scene, and camera zoom once unity starts loading
	useEffect(() => {
		if (isLoaded === true) {
			let scaleResolution = (pomodoroLifeTime / 2) + 5;
			let changePosition = (.0405 * pomodoroLifeTime) + .369;
			let scaleCamera = (pomodoroLifeTime / 5) + 3; //default scale = 3, scale by 1 at each 5th pomodoro
			let remainder = pomodoroLifeTime % 5;

			if (remainder === 0) {
				unityContext.send("pet", "ChangeCameraSizeOnLoad", scaleCamera); //sets camera size without slowing down
			}

			//removes decimal from scale camera when pomodoro count is not a multiple of 5
			if (remainder != 0) {
				let reducedScaleCamera = ~~scaleCamera;
				unityContext.send("pet", "ChangeCameraSizeOnLoad", reducedScaleCamera);
			}

			//if (pomodoroLifeTime <= ?) {
			unityContext.send("pet", "ShowMountain");
			//} else {
			//	unityContext.send("pet", "ShowEarth");
			//}

			unityContext.send("pet", "ScaleResolution", scaleResolution); 
			unityContext.send("pet", "ChangePosition", changePosition); 
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

