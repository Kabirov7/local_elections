import React, {useEffect, useState} from "react";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Typography} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		width: "30%"
	},
	typography: {
		fontSize: "24px"
	}
}));


function SuperSelect(props) {
	const [value, setValue] = useState("");
	const [value_2, setValue_2] = useState("");
	const [currentParties, setCurrentParties] = useState([])
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const {title, answers, returnAnswer, updateState, index} = props;


	useEffect(() => {
		const parties = answers.map((item, id) => item.answers)
		let indexOf = answers.map((item, id) => item.title == value).indexOf(true)
		setCurrentParties(parties[indexOf])

	}, [value])

	const handleChange = (event) => {
		setValue(event.target.value);
		console.log(event.target.value)
	};

	const handleChange_2 = (event) => {
		setValue_2(event.target.textContent);
		const allData = value + "=>" + event.target.textContent
		returnAnswer(allData, index)
	};

	const handleClose = () => {
		setOpen(false);
	};
	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<div>
			<div>
				<Typography classes={classes.typography} variant="h6" component="h6">
					{title}
				</Typography>
				<FormControl className={classes.formControl}>
					<Select
						open={open}
						value={value}
						onChange={handleChange}
						onClose={handleClose}
						onOpen={handleOpen}
						input={<Input id="grouped-select"/>}
					>
						{answers.map((item, id) => (
							<MenuItem value={item.title}>
								{item.title}
							</MenuItem>))}
					</Select>
				</FormControl>

				{value && <div style={{padding:15}}><Autocomplete
					autoSelect
					className={classes.formControl}
					style={{margin: "0 auto"}}
					options={currentParties}
					onChange={handleChange_2}
					renderInput={(params) => (
						<TextField {...params}
											 label="Партия"
											 value={value_2}
						/>
					)}
				/></div>}
			</div>
		</div>
	);
}

export default SuperSelect;