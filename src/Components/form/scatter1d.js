import React from 'react';
import ReactEcharts from "echarts-for-react";
import {makeStyles} from '@material-ui/core/styles';
import 'echarts-gl';
import "../../App.css"
import {Grid} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	formControl: {
		height: 60,
	},
}));

export default function ScatterLine(props) {
	const classes = useStyles()
	const emojis = require('emojis-list')
	const {data, axisName} = props;

	const getOption = () => ({
		color: data.map(el => el.color),
		legend: {
			data: data.map(el => el.name),
			orient: "horizontal",
			bottom: "0%",
			width: "100%",
		},
		xAxis: {
			min: -2,
			max: 2,
		},
		yAxis: {
			show: false
		},
		height: 0,
		series: data,
	})

	return (
		<div style={{paddingTop: 50}} className='scatter-line'>
			<h1>{axisName}</h1>
			<div className={"nameAxis"}>
			</div>
			<div>
				<div className={"arrows"}>
					<Grid container alignItems="center" spacing={3}>
						<Grid item xs>
							<p style={{fontSize:21}}>{emojis[3051]}</p>
						</Grid>
						<Grid item xs>
							<div style={{margin: "0 auto", height: 35, width: 2, background: "black"}}>
							</div>
						</Grid>
						<Grid item xs>
							<p style={{transform: "scaleX(-1)", fontSize:21}}>{emojis[3051]}</p>
						</Grid>
					</Grid>
				</div>
				<ReactEcharts style={{height: "250px"}} className={`scatter`} option={getOption()}/>
			</div>
			{/*<h4>{props.axisNearest} — "{position.title}"</h4>*/}
		</div>
	)
}