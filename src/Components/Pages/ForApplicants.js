import React, {useEffect, useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Applicant from "../Applicant/Applicant";
import Questions from "../Quotes/Questions";
import firebase from "../../util/Firebase";


const ForApplicants = () => {
	const [fields, setFields] = useState([]);
	const [axisesAverage, setAxisesAverage] = useState(null);
	const [allFields, setAllFields] = useState(null);
	const [final, setFinal] = useState(null);
	const [status, setStatus] = useState("start")


	useEffect(() => {
		console.log(fields)
		let currentFields = fields.filter(Boolean)
		if ((currentFields != false) && currentFields.length == 5) {
			setStatus("questions")
		}
	}, [fields]);

	useEffect(() => {
		if (axisesAverage) {
			const name = fields[0];
			const lastName = fields[1];
			const number = fields[3];
			const region = fields[2].split("=>")[0];
			const party = fields[2].split("=>")[1];
			const photoUrl = fields[4];

			const applicant = {
				name: name,
				lastName: lastName,
				number: number,
				region: region,
				party: party,
				photoUrl: photoUrl,
				axises: axisesAverage
			}

			const db = firebase.firestore();
			db.collection("applicants").doc().set(applicant)
			setStatus("final")
		}
	}, [axisesAverage])

	const returnFields = (answer) => {
		setFields(answer)
	}

	const returnAxisesAverage = (answer) => {
		setAxisesAverage(answer)
	}


	return (
		<div className="App">
			{(status == "start") ? <Applicant returnFields={returnFields}/> :
				(status == "questions") ? <Questions returnAxisesAverage={returnAxisesAverage} persons="applicants"/> :
					<div><h1>спасибо за то что прошли наш тест</h1><img
						src="https://st.depositphotos.com/1724162/4091/i/600/depositphotos_40912841-stock-photo-cats-eyes.jpg"
						alt="kitty"/></div>
			}

		</div>
	);
}

export default ForApplicants;