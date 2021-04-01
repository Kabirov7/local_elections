import React, {useContext, useEffect, useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Applicant from "../Applicant/Applicant";
import Questions from "../Quotes/Questions";
import firebase from "../../util/Firebase";
import {AuthContext, AuthProvider} from "../../util/Auth";
import {Button} from "@material-ui/core";
import WarningText from "../form/warning";
import RadioButton from "../form/radioButton";

const ForApplicants = () => {
	const [fields, setFields] = useState([]);
	const [axisesAverage, setAxisesAverage] = useState(null);
	const [allFields, setAllFields] = useState(null);
	const [warning, setWarning] = useState(null);
	const [language, setLanguage] = useState(null);
	const [final, setFinal] = useState(null);
	const [status, setStatus] = useState("start")

	const {currentUser} = useContext(AuthContext)

	useEffect(() => {
		const db = firebase.firestore();
		db.collection("fields").doc("applicant")
			.onSnapshot((doc) => {
				setAllFields(doc.data().questions);
			});
	}, [])


	useEffect(() => {
		if (axisesAverage) {
			const name = fields[0];
			const lastName = fields[1];
			const number = currentUser.phoneNumber;
			const region = fields[2].split("=>")[0];
			const party = fields[2].split("=>")[1];
			const photoUrl = fields[3];
			const centralized = (fields[4] == "answ_1") ? true : false;
			const applicants_num = fields[4].split("==")[1] ? fields[4].split("==")[1] : false;

			const applicant = {
				name: name,
				lastName: lastName,
				number: number,
				region: region,
				party: party,
				photoUrl: photoUrl,
				axises: axisesAverage,
				centralized: centralized,
				applicants_num: applicants_num
			}
			const db = firebase.firestore();
			db.collection("applicants").doc(currentUser.uid).set(applicant)
			setStatus("final")
		}
	}, [axisesAverage])

	const checkFields = () => {
		let currentFields = fields.filter(Boolean);
		currentFields = currentFields.map(item => item.length >= 2);
		if ((currentFields.indexOf(false) === -1) && (currentFields.length == allFields.length) && currentFields.length > 0) {
			setStatus("questions")
		} else {
			setWarning(true)
		}
	}
	const returnFields = (answer) => {
		setFields(answer)
	}

	const returnAxisesAverage = (answer) => {
		setAxisesAverage(answer)
	}

	const returnLanguage = (answer) => {
		setLanguage(["ru", "kg"][answer.split("_")[1] - 1])

	}


	return (
		<div className="App">
			{!language ? <RadioButton
					title={"Какой язык?"}
					answers={["ru", "kg"]}
					values={["ru", "kg"]}
					returnAnswer={returnLanguage}
				/> :
				<div>{(status == "start") ?
					<div>
						{warning && <WarningText text={"Заполните все поля пожалуйста"}/>}
						<Applicant returnFields={returnFields} lang={language}/>
						<Button
							style={{marginTop: 20}}
							onClick={() => checkFields()}
							color="primary"
							variant="contained">
							{(language == "ru") ? "Перейти к вопросам" : "Суроолор"}
						</Button>
						<br/>
						<Button
							style={{margin: "20px 0 0 20px"}}
							color="secondary"
							variant="contained"
							onClick={() => firebase.auth().signOut()}>
							{(language == "ru") ? "Выйти" : "Чыгуу"}
						</Button>
					</div>
					:
					(status == "questions") ?
						<Questions lang={language} returnAxisesAverage={returnAxisesAverage} persons="applicants"/>
						:
						<div>
							<h1>  {(language == "ru") ? "Спасибо! Ваши результаты сохранены." : "Рахмат"}</h1>
							<img
								src="https://st.depositphotos.com/1724162/4091/i/600/depositphotos_40912841-stock-photo-cats-eyes.jpg"
								alt="kitty"/>
						</div>
				}</div>
			}


		</div>
	);
}

export default ForApplicants;