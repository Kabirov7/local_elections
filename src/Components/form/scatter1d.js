import React from 'react';
import ReactEcharts from "echarts-for-react";
import {makeStyles} from '@material-ui/core/styles';
import 'echarts-gl';
import "../../App.css"
import {Grid} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	plus: {
		textAlign: "right"
	},
	coordinates: {
		display: "grid",
		gridTemplateColumns: "1fr auto 1fr",
		gridTemplateRows: "1fr",
		justifyContent: "space-evenly",
		fontFamily: 'Roboto, sans-serif',
		fontWeight: 300,
		color: "#474747",
		fontSize: "16px",
		alignItems: "start",
		justifyItems: "center",
	},
	header: {
		textAlign: "center",
		padding: 0,
		fontSize: 25,
		margin: "0 0 15px 0",
		['@media (max-width:780px)']: {
			fontSize: 20
		},
		['@media (max-width:500px)']: {
			fontSize: 17
		},
		['@media (max-width:350px)']: {
			fontSize: 17
		}
	},
	paragraph: {
		fontWeight: 400,
		padding: 0,
		margin: 0,
		['@media (max-width:780px)']: {
			fontSize: 15
		},
		['@media (max-width:500px)']: {
			fontSize: 13
		},
		['@media (max-width:350px)']: {
			fontSize: 11
		}
	}
}));

export default function ScatterLine(props) {
	const classes = useStyles()
	const emojis = require('emojis-list')
	const {data, axisName, plus, minus} = props;

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
		<div style={{paddingTop: 70}} className='scatter-line'>
			<h2 className={classes.header}>{axisName}</h2>
			<div className={"nameAxis"}>
			</div>
			<div>
				<div className={"arrows"}>
					<div className={classes.coordinates}>

						<p className={classes.paragraph}>{minus}</p>

						<div>
							<div style={{
								width: 2,
								height: 50,
								background: "#2b2b2b",
							}}>

							</div>
						</div>

						<p className={classes.paragraph + " " + classes.plus}>{plus}</p>


					</div>
					<Grid container
									direction="row"
									justify="space-around"
									alignItems="center">
							<p style={{fontSize: 21}}>{emojis[3051]}</p>

							<p style={{transform: "scaleX(-1)", fontSize: 21}}>{emojis[3051]}</p>
						</Grid>
				</div>
				<ReactEcharts style={{height: "200px"}} className={`scatter`} option={getOption()}/>
			</div>
		</div>
	)
}