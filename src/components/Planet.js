import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "build/WebGL Builds.loader.js",
    dataUrl: "build/WebGL Builds.data",
    frameworkUrl: "build/WebGL Builds.framework.js",
    codeUrl: "build/WebGL Builds.wasm",
  });

function Planet() {
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
                visibility:"visible",
            }}
            className="unity"
            devicePixelRatio={2}
        />
    );
}

export default Planet;