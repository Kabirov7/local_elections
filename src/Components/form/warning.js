import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	typography: {
		fontSize: "24px",
		margin: "0 auto",
		marginTop: "10px",
		width: "70%",
	}
}));
export default function WarningText(props) {
	const {text} = props
	const classes = useStyles();

	return (
		<div className={classes.typography}>
			<Typography  color="secondary" variant="caption" component="p">
				{text}
			</Typography>
		</div>
	)
}