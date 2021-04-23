import React, { useState, useEffect } from "react";
import { Line, Chart } from "react-chartjs-2";
import axios from "axios";
import StatsNavigation from "./StatsNavigation";

const YearStats = () => {
	const [chartData, setChartData] = useState({});
	Chart.defaults.global.defaultFontColor = "#F8F9FA";
	const [month, setMonth] = useState({});

	async function getYearStats() {
		let getResponse = await axios.get("http://localhost:3001/year/1/");

		let getMonths = getResponse.data;

		setMonth(getMonths);
	}

    //loads stats from server once page loads
	useEffect(() => {
		getYearStats();
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
			],
			datasets: [
				{
					label: "Pomodoros Completed",
					data: [
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
						month[12],
					],
					backgroundColor: ["#54AEA9"],
					borderWidth: 4,
				},
			],
		});
	};

	useEffect(() => {
		chart();
	}, [month]);

	return (
		<div className="container">
            <StatsNavigation />
            <div className="graph" style={{width: '100%', height: '100%'}}>
                <Line
                    data={chartData}
                    options={{
                        responsive: true,
                        title: { text: "Year", display: true },
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

