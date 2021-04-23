import React, { useState, useEffect } from "react";
import { Line, Chart } from "react-chartjs-2";
import axios from "axios";
import StatsNavigation from "./StatsNavigation"; 

const MonthStats = () => {
	const [chartData, setChartData] = useState({});
	Chart.defaults.global.defaultFontColor = "#F8F9FA";
	const [day, setDay] = useState({});

	async function getMonthStats() {
		let getResponse = await axios.get("http://localhost:3001/month/1/");

		let getDays = getResponse.data;

		setDay(getDays);
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
					borderWidth: 4,
				},
			],
		});
	};

	useEffect(() => {
		chart();
	}, [day]);

	return (
		<div className="container">
            <StatsNavigation />
            <div className="graph" style={{width: '100%', height: '100%'}}>
                <Line
                    data={chartData}
                    options={{
                        responsive: true,
                        title: { text: "Month", display: true },
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
