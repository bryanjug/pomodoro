import React, { useState, useEffect } from "react";
import { Line, Chart } from "react-chartjs-2";
import axios from "axios";
import StatsNavigation from "./StatsNavigation";

const DayStats = () => {
	const [day, setDay] = useState({});
	const [chartData, setChartData] = useState({});
	Chart.defaults.global.defaultFontColor = "#F8F9FA";

	//requests server data and sets state
	async function getWeekStats() {
		let getResponse = await axios.get("http://localhost:3001/week/1/");

		let getWeek = getResponse.data;

		setDay(getWeek);
	}

	//loads stats from server once page loads
	useEffect(() => {
		getWeekStats();
	}, []);

	const chart = () => {
		setChartData({
			labels: [
				"sunday",
				"monday",
				"tuesday",
				"wednesday",
				"thursday",
				"friday",
				"saturday",
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
						day[7]
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
			<div className="graph" style={{ width: "100%", height: "100%" }}>
				<Line
					data={chartData}
					options={{
						responsive: true,
						title: { text: "Week", display: true },
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

