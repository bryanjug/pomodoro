import React, { useState, useEffect } from "react";
import { Line, Chart } from "react-chartjs-2";
import axios from "axios";
import StatsNavigation from "./StatsNavigation";

const WeekStats = () => {
	const [day, setDay] = useState({});
	const [chartData, setChartData] = useState({});
	const [pointRadius, setPointRadius] = useState(4);
	const [pointHoverRadius, setPointHoverRadius] = useState(4);
	const [borderWidth, setBorderWidth] = useState(4);
	const [total, setTotal] = useState(0);
	Chart.defaults.global.defaultFontColor = "#F8F9FA";

	const SERVER = `${process.env.REACT_APP_NODE_SERVER}`;

	//requests server data and sets state
	async function getWeekStats() {
		let getResponse = await axios.get(SERVER + "/week/1/");

		let getWeek = getResponse.data;
		let getTotal = getResponse.data.total;

		setDay(getWeek);
		setTotal(getTotal);
	}

	//loads stats from server once page loads
	useEffect(() => {
		getWeekStats();
	}, []);

	const chart = () => {
		setChartData({
			labels: [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
			],
			datasets: [
				{
					label: "Pomodoros Completed",
					data: [
						day[0],
						day[1], 
						day[2], 
						day[3], 
						day[4], 
						day[5], 
						day[6], 
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
			<div className="graph" style={{ width: "100%", height: "100%" }}>
				<Line
					data={chartData}
					options={{
						responsive: true,
						maintainAspectRatio: false,
						title: { text: `Week Total: ${total}`, display: true },
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

export default WeekStats;

