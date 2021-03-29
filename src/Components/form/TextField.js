import React, {useEffect} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {TextField, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	fromControl: {
			width: '70%',
	},
	typography: {
			fontSize:"19px"
	}

}));

const MyTextField = (props) => {

	const classes = useStyles();
	const [value, setValue] = React.useState('');

	const {index, response, returnAnswer, label, disabled, title} = props

	useEffect(() => {
		if (response) {
			setValue(response)
		}
	}, [response])

	const handleChange = (event) => {
		setValue(event.target.value)
		returnAnswer(event.target.value, index)
	}

	return (
		<div>
			<form noValidate autoComplete="off">
				<Typography classes={classes.typography} variant="h6" component="h6">
					{title}
				</Typography>
				<TextField
					disabled={disabled && true}
					id={"textField"}
					value={value}
					label={label && label}
					onChange={handleChange}
				/>
			</form>
		</div>
	)
}

export default MyTextField;
