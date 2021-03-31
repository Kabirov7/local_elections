import ReactEcharts from "echarts-for-react";
import {makeStyles} from '@material-ui/core/styles';
import 'echarts-gl';
import "../../App.css"
import React, {useState, useEffect, useContext} from "react";

const useStyles = makeStyles((theme) => ({
	formControl: {
		paddingBottom: 0,
	},
}));

const Scatter2d = (props) => {
	const [allApplicants, setAllApplicants] = useState()

	const classes = useStyles();

	useEffect(() => {
		let people = allApplicants.map((el, i) => {
			let person = {
				name: el.name,
				symbolSize: 12,
				data: [el.axises.slice(0, 2)],
				type: 'scatter',
				symbol: 'circle',
				color: `#132133`,
				emphasis: {
					label: {
						show: true,
						formatter: el.name,
						position: 'top'
					}
				}
			}
			return person
		})
	}, [allApplicants])

	const getOption = () => ({
		// color: color,
		legend: {
			show: true,
			data: props.names,
			orient: "horizontal",
			height: 'auto',
			top: "3%",
			left: 0,
		},
		grid: {
			z: 2,
			top: "30%",
			height: "50%",
			bottom: "10%"
		},
		xAxis: {
			name: 'x',
			min: -2,
			max: 2,

		},
		yAxis: {
			name: 'y',
			min: -2,
			max: 2,

		},
		// series: axises
	})
	return (
		<div className={classes.formControl}>
			<ReactEcharts style={{height: "500px"}} option={getOption()}/>
		</div>
	);
}

export default Scatter2d;