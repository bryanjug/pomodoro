import React, {useEffect, useState, useContext} from "react";
import Unity from "react-unity-webgl";

function Planet({pomodoroLifeTime, pomodoro, setLoadingStyle, unityContext}) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [didError, setDidError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
		unityContext.on("loaded", () => {
			setIsLoaded(true);
		});

        unityContext.on("error", function (message) {
            setDidError(true);
            setErrorMessage(message);
        });
	}, [unityContext]);

    //load total amount of trees from server
    useEffect(()=> {
        if (isLoaded) {
            unityContext.send("lowpoly_earth", "SpawnTrees", pomodoroLifeTime);
            setLoadingStyle("displayNone");
        }
    }, [isLoaded])

    useEffect(()=> {
        if (isLoaded && pomodoro > 0) {
            unityContext.send("lowpoly_earth", "SpawnTrees", 1);
        }
    }, [isLoaded, pomodoro])
    
    return (
        <Unity 
            unityContext={unityContext}
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
            devicePixelRatio={2}
        />
    );
}

export default Planet;