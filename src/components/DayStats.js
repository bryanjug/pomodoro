import React, { useState, useEffect } from "react";
import { Line, Chart } from "react-chartjs-2";
import axios from "axios";
import StatsNavigation from "./StatsNavigation"; 

const DayStats = () => {
	const [hour, setHour] = useState({});
	const [chartData, setChartData] = useState({});
	Chart.defaults.global.defaultFontColor = "#F8F9FA";

    //requests server data and sets state
	async function getDayStats() {
		let getResponse = await axios.get("http://localhost:3001/day/1/");

		let getHours = getResponse.data;

		setHour(getHours);
	}

    //loads stats from server once page loads
	useEffect(() => {
		getDayStats();
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
			],
			datasets: [
				{
					label: "Pomodoros Completed",
					data: [
						hour[1],
						hour[2],
						hour[3],
						hour[4],
						hour[5],
						hour[6],
						hour[7],
						hour[8],
						hour[9],
						hour[10],
						hour[11],
						hour[12],
						hour[13],
						hour[14],
						hour[15],
						hour[16],
						hour[17],
						hour[18],
						hour[19],
						hour[20],
						hour[21],
						hour[22],
						hour[23],
						hour[24],
					],
					backgroundColor: ["#54AEA9"],
					borderWidth: 4,
				},
			],
		});
	};

    //load chart once request to server is finished
	useEffect(() => {
		chart();
	}, [hour]);

	//checks window size on mount and sets responsive chart fonts
	useEffect(() => {
		if (window.innerWidth < 1781) {
			Chart.defaults.global.defaultFontSize = 12;
		} 
		if (window.innerWidth >= 1781 && window.innerWidth < 1900) {
			Chart.defaults.global.defaultFontSize = 15;
		}
		if (window.innerWidth >= 1900 && window.innerWidth < 2137) {
			Chart.defaults.global.defaultFontSize = 18;
		}
		if (window.innerWidth >= 2137 && window.innerWidth < 2850) {
			Chart.defaults.global.defaultFontSize = 20;
		}
		if (window.innerWidth >= 2850 && window.innerWidth < 4275) {
			Chart.defaults.global.defaultFontSize = 25;
		}
		if (window.innerWidth >= 4275) {
			Chart.defaults.global.defaultFontSize = 35;
		}
	}, [])

	//checks if user changes screen sizes manually and sets responsive chart fonts
	window.addEventListener('resize', () => {
		if (window.innerWidth < 1781) {
			Chart.defaults.global.defaultFontSize = 12;
		}
		if (window.innerWidth >= 1781 && window.innerWidth < 1900) {
			Chart.defaults.global.defaultFontSize = 15;
		}
		if (window.innerWidth >= 1900 && window.innerWidth < 2137) {
			Chart.defaults.global.defaultFontSize = 18;
		}
		if (window.innerWidth >= 2137 && window.innerWidth < 2850) {
			Chart.defaults.global.defaultFontSize = 20;
		}
		if (window.innerWidth >= 2850 && window.innerWidth < 4275) {
			Chart.defaults.global.defaultFontSize = 25;
		}
		if (window.innerWidth >= 4275) {
			Chart.defaults.global.defaultFontSize = 35;
		}
	});

	return (
		<div>
			<StatsNavigation />
			<div className="graph" style={{ width: "100%", height: "100%" }}>
				<Line
					data={chartData}
					options={{
						responsive: true,
						maintainAspectRatio: false,
						title: { 
							text: "Day",
							display: true,
						},
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

