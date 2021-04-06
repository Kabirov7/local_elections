import React from 'react';
import ReactEcharts from "echarts-for-react";
import {makeStyles} from '@material-ui/core/styles';
import 'echarts-gl';
import "../../App.css"
import {Grid} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	plus: {
		textAlign: "right",
		justifySelf: "end"
	},
	container: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr 1fr",
		gridGap: 10,
		alignItems: "center",
		justifyItems: "start",
		['@media (max-width:450px)']: {
			gridTemplateColumns: "1fr 1fr",
			gridGap: 5,
		},
	},
	subContainer: {
		display: "grid",
		alignItems: "center",
		justifyItems: "start",
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
	},
	label: {
		fontWeight: 200,
		padding: 0,
		margin: 0,
		fontSize: 10,
		['@media (max-width:780px)']: {
			fontSize: 8
		},
		['@media (max-width:500px)']: {
			fontSize: 7
		},
		['@media (max-width:350px)']: {
			fontSize: 6
		}
	},
	minus: {
		justifySelf: "start"
	}
}));

export default function ScatterLine(props) {
	const classes = useStyles()
	const emojis = require('emojis-list')
	const {data, axisName, plus, minus} = props;

	const getOption = () => ({
		/*color: data.map(el => el.color),
		legend: {
			data: data.map(el => el.name),
			orient: "horizontal",
			bottom: "0%",
			width: "100%",
		},*/
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
		<div>
			<h2 className={classes.header}>{axisName}</h2>
			<div className={"nameAxis"}>
			</div>
			<div>
				<div className={"arrows"}>
					<div className={classes.coordinates}>

						<p className={classes.paragraph + " " + classes.minus}>{minus}</p>

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
								justify="space-between"
								alignItems="center">
						<p style={{fontSize: 21}}>{emojis[3051]}</p>

						<p style={{transform: "scaleX(-1)", fontSize: 21}}>{emojis[3051]}</p>
					</Grid>
				</div>
				<ReactEcharts style={{height: "100px"}} className={`scatter`} option={getOption()}/>
				<div className={classes.container}>
					{data.map((item, id) =>
						// <div className={classes.subContainer}>

						<div>
							<Grid container wrap="nowrap" spacing={2}>
								<Grid item>
									<div style={{
										height: 10,
										width: 10,
										backgroundColor: item.color,
										borderRadius: "50%",
										display: "inline-block"
									}}></div>
								</Grid>
								<Grid item xs>
									<p className={classes.label} style={{color: "black"}}>{item.name}</p>
								</Grid>
							</Grid>


							<div>

							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}