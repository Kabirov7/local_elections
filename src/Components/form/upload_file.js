import React, {useEffect, useState} from "react";
import {render} from "react-dom";
import CircularProgress, {CircularProgressProps} from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import firebase from "../../util/Firebase";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	typography: {
		fontSize: "24px"
	}
}));
const UploadFile = (props) => {
	const [image, setImage] = useState(null);
	const [progress, setProgress] = useState(null);
	const classes = useStyles();
	const {title, index, returnAnswer} = props;

	const handleChange = e => {
		if (e.target.files[0]) {
			setImage(e.target.files[0])
			const file = e.target.files[0]
			const file_name = file.lastModified + file.name + "___" + new Date()
			firebase.storage().ref(`images/${file_name}`).put(e.target.files[0])
				.on(
					"state_changed",
					snapshot => {
						let currentProgress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
						setProgress(currentProgress);
					},
					error => {
						console.log(error)
					},
					() => {
						firebase.storage()
							.ref("images")
							.child(file_name)
							.getDownloadURL()
							.then(url => {
								returnAnswer(url, index)
							})
					}
				)
		}

	}


	useEffect(() => {
		console.log("image => ", image);
	}, [image])
	//

	return (
		<div>
			<Typography classes={classes.typography} variant="h6" component="h6">
				{title}
			</Typography>
			<Button
				variant="contained"
				component="label"
			>
				Upload File
				<input
					type="file"
					onChange={handleChange}
					hidden
				/>
			</Button>
			<br/>
			{progress && <Box position="relative" display="inline-flex">
				<CircularProgress variant="determinate" {...{value: progress}} />
				<Box
					top={0}
					left={0}
					bottom={0}
					right={0}
					position="absolute"
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
						progress
					)}%`}</Typography>
				</Box>
			</Box>}
		</div>
	)
}

export default UploadFile;
