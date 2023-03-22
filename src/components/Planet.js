import React, {useEffect, useState, useContext} from "react";
import Unity from "react-unity-webgl";

function Planet({pomodoroLifeTime, pomodoro, setLoadingStyle, unityContext}) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [didError, setDidError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    

    // useEffect(() => {
    //     const unblock = navigator.block( async ( tx ) => {
    //          if(isLoaded) {
    //              await unityContext.quitUnityInstance()
    //              await setIsLoaded(false)
    //              tx.retry()
    //          } else {
    //              unblock()
    //              tx.retry()
    //          }
    //      } );
    //      return unblock;
    // }, [navigator,isLoaded])

    // useEffect(() => {
    //     setTimeout(() => {
    //         unityContext.quitUnityInstance()
    //       }, "3000");
    // }, [])
    
    // useEffect(() => {
    //     window.addEventListener('locationchange', function () {
    //         console.log('location changed!');
    //         unityContext.quitUnityInstance()
    //     });
    // }, [])

    useEffect(() => {
		unityContext.on("loaded", () => {
			setIsLoaded(true);
		});
        
        unityContext.on("quitted", function () {
            unityContext.quitUnityInstance()
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
    
    return didError === true ? (
        <div>Oops, that's an error {errorMessage}</div>
    )
    :
    (
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