import React from 'react';
import ReactEcharts from "echarts-for-react";
import {makeStyles} from '@material-ui/core/styles';
import 'echarts-gl';
import "../../App.css"

const useStyles = makeStyles((theme) => ({
	formControl: {
		height: 60,
	},
}));

export default function ScatterLine(props) {
	const classes = useStyles()

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
		<div style={{paddingTop:50}} className='scatter-line'>
			<h1>{axisName}</h1>
			{/*<div className={"nameAxis"}>
				<h5 style={{textAlign: "center"}}>{props.axisName}: {parseFloat(props.axisAverrage).toFixed(2)}</h5>
			</div>
			<div>
				<div className={"decision"}>
					<p className={"minus"}>
						{props.axisPoints.minus}<br/>
					</p>
					<div>
						<div>
						</div>
					</div>
					<p className={"plus"}>{props.axisPoints.plus}<br/>
					</p>
				</div>
				<div className={"arrows"}>
					<i className="em em-arrow_left" aria-role="presentation" aria-label="LEFTWARDS BLACK ARROW"></i>
					<i className="em em-arrow_right" aria-role="presentation" aria-label="LEFTWARDS BLACK ARROW"></i>
				</div>*/}
				<ReactEcharts style={{height: "250px"}} className={`scatter`} option={getOption()}/>
			{/*</div>*/}
			{/*<h4>{props.axisNearest} — "{position.title}"</h4>*/}
		</div>
	)
}