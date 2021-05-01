import React, { useState, useEffect } from "react";
import { Line, Chart } from "react-chartjs-2";
import axios from "axios";
import StatsNavigation from "./StatsNavigation"; 

const MonthStats = () => {
	const [chartData, setChartData] = useState({});
	const [day, setDay] = useState({});
	const [pointRadius, setPointRadius] = useState(4);
	const [pointHoverRadius, setPointHoverRadius] = useState(4);
	const [borderWidth, setBorderWidth] = useState(4);
	const [total, setTotal] = useState(0);
	Chart.defaults.global.defaultFontColor = "#F8F9FA";

	const SERVER = `${process.env.REACT_APP_NODE_SERVER}`;

	async function getMonthStats() {
		let getResponse = await axios.get(SERVER + "/month/1/");

		let getDays = getResponse.data;
		let getTotal = getResponse.data.total;

		setDay(getDays);
		setTotal(getTotal);
	}

    //loads stats from server once page loads
	useEffect(() => {
		getMonthStats();
	}, []);
	
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
				"13",
				"14",
				"15",
				"16",
				"17",
				"18",
				"19",
				"20",
				"21",
				"22",
				"23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
			],
			datasets: [
				{
					label: "Pomodoros Completed",
					data: [
						day[1],
						day[2],
						day[3],
						day[4],
						day[5],
						day[6],
						day[7],
						day[8],
						day[9],
						day[10],
						day[11],
						day[12],
						day[13],
						day[14],
						day[15],
						day[16],
						day[17],
						day[18],
						day[19],
						day[20],
						day[21],
						day[22],
						day[23],
                        day[24],
                        day[25],
						day[26],
						day[27],
						day[28],
						day[29],
						day[30],
						day[31],
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
	}, [day, pointRadius]);

	return (
		<div>
            <StatsNavigation />
            <div className="graph" style={{width: '100%', height: '100%'}}>
                <Line
                    data={chartData}
                    options={{
						responsive: true,
						maintainAspectRatio: false,
                        title: { text: `Month Total: ${total}`, display: true },
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

export default MonthStats;
