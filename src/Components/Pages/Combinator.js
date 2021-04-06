import React, {useContext, useEffect, useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import FieldsPage from "../Applicant/FieldsPage";
import Questions from "../Quotes/Questions";
import firebase from "../../util/Firebase";
import {AuthContext, AuthProvider} from "../../util/Auth";
import {AuthContextUsers, AuthProviderUsers} from "../../util/AuthUsers";
import {Button} from "@material-ui/core";
import WarningText from "../form/warning";
import RadioButton from "../form/radioButton";
import Scatters from "./Scatters";
import {HashRouter as Router} from "react-router-dom";

const Combinator = (props) => {
	const [fields, setFields] = useState([]);
	const [axisesAverage, setAxisesAverage] = useState(null);
	const [allFields, setAllFields] = useState(null);
	const [warning, setWarning] = useState(null);
	const [language, setLanguage] = useState(null);
	const [final, setFinal] = useState(null);
	const [finalAnswers, setFinalAnswers] = useState(null);
	const [status, setStatus] = useState("start")


	const {page_for} = props;

	const {currentUser} = useContext(AuthContextUsers)
	const {currentUser_applicant} = useContext(AuthContext)

	useEffect(() => {
		const db = firebase.firestore();
		db.collection("fields").doc(page_for)
			.onSnapshot((doc) => {
				setAllFields(doc.data().questions);
			});
	}, [])


	useEffect(() => {
		if (axisesAverage) {
			let human;
			if (page_for == "applicant") {
				const name = fields[0];
				const lastName = fields[1];
				const number = currentUser_applicant.phoneNumber;
				const region = fields[2].split("=>")[0];
				const party = fields[2].split("=>")[1];
				const photoUrl = fields[3];
				const centralized = (fields[4] == "answ_1") ? true : false;
				const applicants_num = fields[4].split("==")[1] ? fields[4].split("==")[1] : false;

				human = {
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

			} else if (page_for == "user") {
				const sex = fields[0];
				const age = fields[1];
				const mail = currentUser.email;
				const region = fields[2];
				const axises = axisesAverage;
				human = {
					sex: sex,
					age: age,
					mail: mail,
					region: region,
					axises: axises,
				}

			}
			const db = firebase.firestore();
			let userUID = (page_for == "applicant") ? currentUser_applicant.uid : currentUser.uid
			db.collection(page_for + "s").doc(userUID).set(human)
			setFinalAnswers(human)
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
						{/*<FieldsPage
							type_people={"applicant"}
							returnFields={returnFields} lang={language}/>*/}
						<FieldsPage
							type_people={"user"}
							returnFields={returnFields} lang={language}/>
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
						(page_for == "applicant") ?
							<div>
								<h1>  {(language == "ru") ? "Спасибо! Ваши результаты сохранены." : "Рахмат"}</h1>
								<img
									src="https://st.depositphotos.com/1724162/4091/i/600/depositphotos_40912841-stock-photo-cats-eyes.jpg"
									alt="kitty"/>
							</div> :
							<div>
								<Scatters region={finalAnswers.region} currentAxises={axisesAverage}/>
							</div>
				}</div>
			}


		</div>
	);
}

export default Combinator;