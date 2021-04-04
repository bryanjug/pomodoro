import React, {useState, useEffect} from 'react';
import {Line, Chart} from 'react-chartjs-2';
import axios from 'axios';
import StatsNavigation from './StatsNavigation';

const DayStats = () => {
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
		<div className="container">
			<StatsNavigation />
			<div className="graph" style={{width: '100%', height: '100%'}}>
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

export default DayStats;