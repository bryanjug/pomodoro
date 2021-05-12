//https://pomodoroserver.herokuapp.com/
import React, { useState, useEffect } from "react";
import {CancelToken} from 'axios';
import API from './API';

const Leaderboards = ({setLoadingStyle, userName}) => {
    const source = CancelToken.source();
    const [dataLoaded, setDataLoaded] = useState(false);
    var reconnect;
    
    function GetLeaderboards() {
        API.get(`/lifetime?_sort=total&_order=desc&_start=0&_limit=10`, {cancelToken: source.token})
			.then(function (response) {
				let getUsers = response.data;
                console.log(getUsers);

                setDataLoaded(true);
            })
            .catch(function (error) {
                if (error.request) {
					console.log("Server is offline");
					reconnect = setInterval(() => {
						API.get(`/lifetime?_sort=total&_order=desc&_start=0&_limit=10`, {cancelToken: source.token})
							.then(function (response) {
                                let getUsers = response.data;
                                console.log(getUsers);

								setDataLoaded(true);
								clearInterval(reconnect);
								console.log("Server is online!");
							})
							.catch(function (error) {
								if (error.request) {
									console.log("Server is still offline");
								}
							})
					}, 3000);
				}
            })
    }

    useEffect(() => {
		GetLeaderboards();
        
        //cleanup function for reconnecting interval 
		//and axios connections
		return () => {
			source.cancel();
			clearInterval(reconnect);
		}
    }, [])
    
    	//show loading spinner when user is not logged in and data is
	//still loading
	useEffect(() => {
		if (dataLoaded === true) {
			setLoadingStyle("text-center loading displayNone");
		}
		if (dataLoaded === false) {
			setLoadingStyle("text-center loading");
		}
		return () => {
			setLoadingStyle("text-center loading displayNone");
		}
	}, [dataLoaded])

    return (
        <div>
            <p className="text-light text-center mt-5"><b>Overall Leaderboards</b></p>
        </div>
    );
}

export default Leaderboards;