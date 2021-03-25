import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import {Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	formControl: {
		minWidth: "30%",
		maxWidth: 300
	},
	typography: {
		fontSize: "24px"
	}
}));

export default function MySelectBox(props) {
	const classes = useStyles();
	const [value, setValue] = React.useState('');
	const [subAnswers, setSubAnswers] = React.useState([]);
	const [open, setOpen] = React.useState(false);

	const {title, answers, returnAnswer,/* updateState, */index} = props;

	const handleChange = (event) => {
		setValue(event.target.value);
		returnAnswer(event.target.value, index);
		console.log(event.target.value)

		/*let indexOfTrue = answers.map((item, id) => item.title == event.target.value).indexOf(true)
		setSubAnswers(answers[indexOfTrue])*/

	};

	const handleClose = () => {
		setOpen(false);
	};
	const handleOpen = () => {
		setOpen(true);
	};

	return (<div>
			<Typography classes={classes.typography} variant="h6" component="h6">
				{title}
			</Typography>
			<FormControl className={classes.formControl}>
				<Select
					labelId="demo-controlled-open-select-label"
					id="demo-controlled-open-select"
					open={open}
					onClose={handleClose}
					onOpen={handleOpen}
					value={value}
					onChange={handleChange}
				>
					<MenuItem value={"None"}><em>None</em></MenuItem>
					{answers.map((item, id) => (
						<MenuItem value={item.title}>
							{item.title}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			</div>
	)
}