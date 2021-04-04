import React, {useState, useEffect} from 'react';
import {Line, Chart} from 'react-chartjs-2';

// import axios from 'axios';

// async function fetchDay() {
// 	let res = await axios.get('http://localhost:3001/day');

// 	let data = res.data;
	
// 	console.log(data);
// }

// fetchDay();

// async function fetchWeek() {
// 	let res = await axios.get('http://localhost:3001/week');

// 	let data = res.data;
	
// 	console.log(data);
// }

// fetchWeek();

// async function fetchMonth() {
// 	let res = await axios.get('http://localhost:3001/month');

// 	let data = res.data;
	
// 	console.log(data);
// }

// fetchMonth();

// async function fetchYear() {
// 	let res = await axios.get('http://localhost:3001/year');

// 	let data = res.data;
	
// 	console.log(data);
// }

// fetchYear();
const Stats = () => {
	const [chartData, setChartData] = useState({});
	Chart.defaults.global.defaultFontColor = "#F8F9FA";

	const chart = () => {
		setChartData({
			labels: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
			datasets: [
				{
					label: 'Pomodoros Completed',
					data: [32, 45, 13, 44, 10, 5, 22],
					backgroundColor: ['#54AEA9'],
					borderWidth: 4
				}
			]
		})
	}

	useEffect(() => {
		chart();
	}, [])
	
	return (
		<div>
			<div style={{height: '500px', width: '500px'}}>
				<Line data={chartData} options={{
					responsive: true,
					title: {text: 'Week', display: true},
					scales: {
						yAxes: [
							{
								ticks: {
									autoSkip: true,
									maxTicksLimit: 10,
									beginAtZero: true
								},
								gridLines: {
									display: false
								}
							}
						],
						xAxes: [
							{
								gridLines: {
									display: false
								}
							}
						]
					}
				}}/>
			</div>
		</div>
	);
};

export default Stats;