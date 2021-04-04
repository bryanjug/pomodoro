import React, { useState, useEffect } from "react";
import { Line, Chart } from "react-chartjs-2";
import axios from "axios";
import StatsNavigation from "./StatsNavigation";

const DayStats = () => {
	const [chartData, setChartData] = useState({});
	Chart.defaults.global.defaultFontColor = "#F8F9FA";

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
			],
			datasets: [
				{
					label: "Pomodoros Completed",
					data: [
						32,
						45,
						13,
						44,
						10,
						5,
						22,
						2,
						32,
						45,
						13,
						44,
						10,
						5,
						22,
						2,
						32,
						45,
						13,
						44,
						10,
						5,
						22,
						2,
					],
					backgroundColor: ["#54AEA9"],
					borderWidth: 4,
				},
			],
		});
	};

	useEffect(() => {
		chart();
	}, []);

	return (
		<div className="container">
            <StatsNavigation />
            <div className="graph" style={{width: '100%', height: '100%'}}>
                <Line
                    data={chartData}
                    options={{
                        responsive: true,
                        title: { text: "Day", display: true },
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

export default DayStats;
