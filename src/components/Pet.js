import React, { useEffect, useState } from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
	codeUrl: "/Pet/Build/Pet.wasm",
	frameworkUrl: "/Pet/Build/Pet.framework.js",
	dataUrl: "/Pet/Build/Pet.data",
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

	//runs animation and resets back to first unity state once feedPet state updates
	useEffect(() => {
		unityContext.send("pet", "Eat", "true");

		let scaleResolution = (pomodoroLifeTime) + 5;
		let changePosition = (.081 * pomodoroLifeTime) + .369;
		let scaleCloud = (.1 * pomodoroLifeTime) + 1.2; //original scale = 1.2, scale the cloud .1 by pomodoro = 1

		if (feedPet === true) {
			var feed = setInterval(() => {
				unityContext.send("pet", "ScaleCloud", scaleCloud); //set cloud size
				unityContext.send("pet", "ShowCloud"); //start cloud anim
				unityContext.send("pet", "Eat", "false"); //gameobject, function name, variable passed to unity
				setFeedPet(false);
				clearInterval(feed);
			}, 6000);

			//wait for cloud anim to cover pet
			var resolution = setInterval(() => {
				unityContext.send("pet", "ScaleResolution", scaleResolution); //original scale = 5, scale by +1
				unityContext.send("pet", "ChangePosition", changePosition); //from y = .369 to y = .45 -> position change by each scale of 1 = .081 y difference
				clearInterval(resolution);
			}, 6500);
		}
	}, [feedPet]);

	useEffect(() => {
		if (activity === "Resting Mode") {
			setFeedPet(true);
		}
	}, [activity]);

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
