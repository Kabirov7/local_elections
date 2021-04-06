import React, {useContext, useEffect, useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import MySelectBox from "../form/select";
import MyTextField from "../form/TextField";
import firebase from "../../util/Firebase";
import SuperSelect from "../form/superSelect";
import UploadFile from "../form/upload_file";
import RadioButton from "../form/radioButton";
import Grid from '@material-ui/core/Grid';
import WarningText from "../form/warning";
import {Button, LinearProgress, List} from "@material-ui/core";
import {AuthContextUsers} from "../../util/AuthUsers";
import {AuthContext} from "../../util/Auth";
import Scatters from "./Scatters";

const MyResult = (props) => {
	const [usersAnswers, setUsersAnswers] = useState(null);

	const {currentUser} = useContext(AuthContextUsers)
	const {currentUser_applicant} = useContext(AuthContext)

	useEffect(() => {
		const db = firebase.firestore();
		// let curr_questions = (lang == "ru") ? "all_questions" : "all_questions_kg";
		db.collection("users").doc(currentUser.uid)
			.onSnapshot((doc) => {
				setUsersAnswers(doc.data());
			});

	}, [])

	return (
		<div>
			{usersAnswers && <Scatters region={usersAnswers.region} currentAxises={usersAnswers.axises}/>}
		</div>
	)
}

export default MyResult;