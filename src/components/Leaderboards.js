import React, { useState, useEffect } from "react";
import {CancelToken} from 'axios';
import API from './API';

const Leaderboards = ({setLoadingStyle, userName}) => {
    const source = CancelToken.source();
    const [dataLoaded, setDataLoaded] = useState(false);
    const [start, setStart] = useState(0);
    const [users, setUsers] = useState({});
    const [userRank, setUserRank] = useState([1, 2, 3, 4, 5, 6]);
    const [backButtonStyle, setBackButtonStyle] = useState("leaderboardButtonLeft displayNone");
    const [nextButtonStyle, setNextButtonStyle] = useState("leaderboardButtonRight");
    var reconnect;

    function NameList() {    
        if (dataLoaded === true && users.length > 0) { 
            const listItems = users.map((user, i) =>  
                <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                    {userRank[i]}. {user.userName}
                    <span className="badge bg-primary rounded-pill text-light leaderboardCount">{user.total}</span>
                </li>
            );  
            return (  
                <div>
                    {listItems}  
                </div>  
            );  
        }
    } 
    
    const GetLeaderboards = () => {
        API.get(`/lifetime?_sort=total&_order=desc&_start=${start}&_limit=6`, {cancelToken: source.token})
			.then(function (response) {
                let getUsers = response.data;
                setDataLoaded(true);
                setUsers(getUsers);
            })
            .catch(function (error) {
                if (error.request) {
					console.log("Server is offline");
					reconnect = setInterval(() => {
						API.get(`/lifetime?_sort=total&_order=desc&_start=${start}&_limit=6`, {cancelToken: source.token})
							.then(function (response) {
                                let getUsers = response.data;
                                setDataLoaded(true);
                                setUsers(getUsers);
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
    }, [start])
    
    //show loading spinner when data is loading
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
    
    function OnNextClick() {
        setStart(start + 6);
        var newArray = [];
        var i;
        for (i = 0; i < 6; i++) {
            var sum = userRank[i] + 6;
            newArray.push(sum);
        }
        setUserRank(newArray);
    }

    function OnBackClick() {
        setStart(start - 6);
        var newArray = [];
        var i;
        for (i = 0; i < 6; i++) {
            var sum = userRank[i] - 6;
            newArray.push(sum);
        }
        setUserRank(newArray);
    }

    useEffect(() => {
        if (start === 0) {
            setBackButtonStyle("leaderboardButtonLeft displayNone");
        } else {
            setBackButtonStyle("leaderboardButtonLeft");
        }
        if (users.length < 6) {
            setNextButtonStyle("leaderboardButtonRight displayNone");
        } else {
            setNextButtonStyle("leaderboardButtonRight");
        }
    }, [start, users])

    return (
        <div className="container leaderboardsContainer">
            <p className="text-light text-center leaderboardTitle"><b>Overall Pomodoros Completed</b></p>
            <div className="row">
                <div className="col-6 userHeader text-light">
                    <p>Users</p>
                </div>
                <div className="col-6 scoreHeader text-light">
                    <p>Score</p>
                </div>
            </div>
            <ul className="list-group leaderboards">
                {NameList()}
            </ul>
            <div className="leaderboardButtons row">
                <div className="col-6">
                    <button className={backButtonStyle} onClick={OnBackClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left leaderboardButtonIcon leaderboardButtonIconLeft" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                        <span className="leaderboardButtonText">Back</span>
                    </button>
                </div>
                <div className="col-6">
                    <button className={nextButtonStyle} onClick={OnNextClick}>
                        <span className="leaderboardButtonText">Next</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right leaderboardButtonIcon leaderboardButtonIconRight" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Leaderboards;