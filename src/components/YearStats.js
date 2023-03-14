import React, { useState, useEffect } from "react";
import { Line, Chart } from "react-chartjs-2";
import API from './API';
import {CancelToken} from 'axios';
import StatsNavigation from "./StatsNavigation";
import {CreateNewUser} from './NewUser';

const YearStats = ({setLoadingStyle}) => {
	const [chartData, setChartData] = useState({});
	const [month, setMonth] = useState({});
	const [pointRadius, setPointRadius] = useState(4);
	const [pointHoverRadius, setPointHoverRadius] = useState(4);
	const [borderWidth, setBorderWidth] = useState(4);
	const [total, setTotal] = useState(0);
	const [dataLoaded, setDataLoaded] = useState(false);
	Chart.defaults.global.defaultFontColor = "#F8F9FA";
	// const source = CancelToken.source();
	// var reconnect;

	// function getYearStats() {
	// 	API.get(`/year/${userId}`, {cancelToken: source.token})
	// 		.then(function (response) {
	// 			let getMonths = response.data;
	// 			let getTotal = response.data.total;

	// 			setMonth(getMonths);
	// 			setTotal(getTotal);
	// 			setDataLoaded(true);
	// 		})
	// 		.catch(function (error) {
	// 			if (error.response) {
	// 				CreateNewUser(userId, userName);
	// 				setDataLoaded(true);
	// 			}
	// 			if (error.request) {
	// 				console.log("Server is offline");
	// 				reconnect = setInterval(() => {
	// 					API.get(`/year/${userId}`, {cancelToken: source.token})
	// 						.then(function (response) {
	// 							let getMonths = response.data;
	// 							let getTotal = response.data.total;

	// 							setMonth(getMonths);
	// 							setTotal(getTotal);
	// 							setDataLoaded(true);
	// 							clearInterval(reconnect);
	// 							console.log("Server is online!");
	// 						})
	// 						.catch(function (error) {
	// 							if (error.request) {
	// 								console.log("Server is still offline");
	// 							}
	// 							if (error.response) {
	// 								CreateNewUser(userId, userName);
	// 								setDataLoaded(true);
	// 								clearInterval(reconnect);
	// 							}
	// 						})
	// 				}, 3000);
	// 			}
	// 		})
	// }

    //loads stats from server once user is logged in
	// useEffect(() => {
	// 	if (userId) {
	// 		getYearStats();
	// 	}
	// 	//cleanup function for reconnecting interval 
	// 	//and axios connections
	// 	return () => {
	// 		source.cancel();
	// 		clearInterval(reconnect);
	// 	}
	// }, [userId]);

	//show loading spinner when user is not logged in and data is
	//still loading
	// useEffect(() => {
	// 	if (userId && dataLoaded === true) {
	// 		setLoadingStyle("text-center loading displayNone");
	// 	}
	// 	if (userId === null || dataLoaded === false) {
	// 		setLoadingStyle("text-center loading");
	// 	}
	// 	return () => {
	// 		setLoadingStyle("text-center loading displayNone");
	// 	}
	// }, [userId, dataLoaded])
	
	const chart = () => {
		setChartData({
			labels: [
				"1",
				"2",
				"3",
				"4",
				"5",
				"6",
				"7",
				"8",
				"9",
				"10",
				"11",
				"12",
			],
			datasets: [
				{
					label: "Pomodoros Completed",
					data: [
						month[0],
						month[1],
						month[2],
						month[3],
						month[4],
						month[5],
						month[6],
						month[7],
						month[8],
						month[9],
						month[10],
						month[11],
					],
					backgroundColor: ["#54AEA9"],
					borderWidth: borderWidth,
					pointRadius: pointRadius,
					pointHoverRadius: pointHoverRadius,
				},
			],
		});
	};

	//checks if user changes screen sizes manually and sets responsive chart
	const AsyncResponsiveChart = () => {
		window.addEventListener('resize', () => {
			if (window.innerWidth < 1781) {
				Chart.defaults.global.defaultFontSize = 12;
				setPointRadius(4);
				setPointHoverRadius(4);
				setBorderWidth(4);
			}
			if (window.innerWidth >= 1781 && window.innerWidth < 1900) {
				Chart.defaults.global.defaultFontSize = 15;
				setPointRadius(6);
				setPointHoverRadius(6);
				setBorderWidth(6);
			}
			if (window.innerWidth >= 1900 && window.innerWidth < 2137) {
				Chart.defaults.global.defaultFontSize = 18;
				setPointRadius(7);
				setPointHoverRadius(7);
				setBorderWidth(7);
			}
			if (window.innerWidth >= 2137 && window.innerWidth < 2850) {
				Chart.defaults.global.defaultFontSize = 20;
				setPointRadius(8);
				setPointHoverRadius(8);
				setBorderWidth(8);
			}
			if (window.innerWidth >= 2850 && window.innerWidth < 4275) {
				Chart.defaults.global.defaultFontSize = 25;
				setPointRadius(9);
				setPointHoverRadius(9);
				setBorderWidth(9);
			}
			if (window.innerWidth >= 4275) {
				Chart.defaults.global.defaultFontSize = 40;
				setPointRadius(12);
				setPointHoverRadius(12);
				setBorderWidth(15);
			}
		});
	}

	//checks window size on mount and sets responsive chart
	const MountResponsiveChart = () => {
		if (window.innerWidth < 1781) {
			Chart.defaults.global.defaultFontSize = 12;
			setPointRadius(4);
			setPointHoverRadius(4);
			setBorderWidth(4);
		} 
		if (window.innerWidth >= 1781 && window.innerWidth < 1900) {
			Chart.defaults.global.defaultFontSize = 15;
			setPointRadius(6);
			setPointHoverRadius(6);
			setBorderWidth(6);
		}
		if (window.innerWidth >= 1900 && window.innerWidth < 2137) {
			Chart.defaults.global.defaultFontSize = 18;
			setPointRadius(7);
			setPointHoverRadius(7);
			setBorderWidth(7);
		}
		if (window.innerWidth >= 2137 && window.innerWidth < 2850) {
			Chart.defaults.global.defaultFontSize = 20;
			setPointRadius(8);
			setPointHoverRadius(8);
			setBorderWidth(8);
		}
		if (window.innerWidth >= 2850 && window.innerWidth < 4275) {
			Chart.defaults.global.defaultFontSize = 25;
			setPointRadius(9);
			setPointHoverRadius(9);
			setBorderWidth(9);
		}
		if (window.innerWidth >= 4275) {
			Chart.defaults.global.defaultFontSize = 40;
			setPointRadius(12);
			setPointHoverRadius(12);
			setBorderWidth(15);
		}
	}

	//runs responsive functions on mount and removes event listener on dismount
	useEffect(() => {
		AsyncResponsiveChart();
		MountResponsiveChart();

		return () => {
			window.removeEventListener('resize', AsyncResponsiveChart);
		}
	}, [])

	//updates chart once data is fetched and when screen size changes
	useEffect(() => {	
		chart();
	}, [dataLoaded, pointRadius]);

	return (
		<div>
            <StatsNavigation />
            <div className="graph" style={{width: '100%', height: '100%'}}>
                <Line
                    data={chartData}
                    options={{
						responsive: true,
						maintainAspectRatio: false,
                        title: { text: `Year Total: ${total}`, display: true },
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        autoSkip: true,
                                        maxTicksLimit: 10,
                                        beginAtZero: true,
                                    },
                                    gridLines: {
                                        display: false,
                                    },
                                },
                            ],
                            xAxes: [
                                {
                                    gridLines: {
                                        display: false,
                                    },
                                },
                            ],
                        },
                    }}
                />
            </div>
        </div>
	);
};

export default YearStats;

