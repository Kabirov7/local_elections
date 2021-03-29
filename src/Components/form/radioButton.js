import React, {useEffect} from 'react';
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
		marginTop: "40px",
		margin: "0 auto",
		width: "80%",

	},
	typography: {
		fontSize: "18px"
	},
	radio: {
		fontSize: "15px",
		color: "black"

	}
}));
const RadioButton = (props) => {
	const [value, setValue] = React.useState('female');
	const classes = useStyles();
	const {title, id, answers, ans, index, values, returnAnswer} = props;

	const handleChange = (event) => {
		setValue(event.target.value);
		returnAnswer("answ_" + (1 + answers.indexOf(event.target.value)), index)
	};

	useEffect(() => {
		if (ans) {
			const currentAnswer = Object.values(ans)[0].split("_")[1] - 1
			setValue(answers[currentAnswer])
		}
	}, [ans])

	return (
		<div className={classes.formControl}>
			<Typography className={classes.typography} variant="h6" component="p">
				{title}
			</Typography>
			<div style={{paddingTop:15}}>
				<FormControl error={true} style={{margin: 0, padding: 0}} const='fieldset'>
					<RadioGroup aria-label={title}
											name={title} value={value} onChange={handleChange}>
						{answers.map((item, i) =>
							<FormControlLabel
								key={i}
								value={item }
								control={<Radio/>}
								label={
									<Typography variant="body2" component="p" className={classes.radio}
															color="textSecondary">{item}</Typography>
								}/>)
						}

					</RadioGroup>
				</FormControl>
			</div>
		</div>
	);
}

export default RadioButton;