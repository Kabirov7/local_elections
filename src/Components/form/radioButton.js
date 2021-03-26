import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	formControl: {
		marginTop: "30px",
		margin: "0 auto",
		width: "70%",
	},
	typography: {
		fontSize: "24px"
	}
}));
const RadioButton = (props) => {
	const [value, setValue] = React.useState('female');
	const classes = useStyles();
	const {title, index, answers, values, returnAnswer} = props;

	const handleChange = (event) => {
		setValue(event.target.value);

		returnAnswer("answ_" + (1 + answers.indexOf(event.target.value)), index)
	};

	return (
		<div className={classes.formControl}>
			<Typography className={classes.typography} variant="h6" component="h6">
				{title}
			</Typography>
			<FormControl error={true} style={{margin: 0, padding: 0}} const='fieldset'>
				<RadioGroup aria-label={title} name={title} value={value} onChange={handleChange}>
					{answers.map((item, i) =>
						<FormControlLabel
							key={i}
							value={item}
							control={<Radio/>}
							label={item}/>)
					}

				</RadioGroup>
			</FormControl>

		</div>
	);
}

export default RadioButton;