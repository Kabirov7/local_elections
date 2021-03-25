import React, {useEffect} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {TextField, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	fromControl: {
			width: '30%',
	},
	typography: {
			fontSize:"24px"
	}

}));

const MyTextField = (props) => {

	const classes = useStyles();
	const [value, setValue] = React.useState('');

	const {index, response, returnAnswer, title} = props

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
					id={"textField"}
					value={value}
					onChange={handleChange}
				/>
			</form>
		</div>
	)
}

export default MyTextField;
