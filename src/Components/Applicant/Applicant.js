import React, {useEffect, useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import MySelectBox from "../form/select";
import MyTextField from "../form/TextField";
import firebase from "../../util/Firebase";
import SuperSelect from "../form/superSelect";
import UploadFile from "../form/upload_file";
import RadioButton from "../form/radioButton";
import RadioFututureText from "../form/radioFutureText";

const Applicant = (props) => {
	const [questions, setQuestions] = useState([]);
	const [answers, setAnswers] = useState([]);

	const {returnFields} = props;

	useEffect(() => {
		const db = firebase.firestore();
		db.collection("fields").doc("applicant")
			.onSnapshot((doc) => {
				setQuestions(doc.data().questions);
			});
	}, [])

	useEffect(() => {
		console.log(answers)
	}, [answers])

	const returnAnswer = (answer, index) => {
		const tmp = [...answers]
		tmp[index] = answer
		setAnswers(tmp)
		returnFields(tmp)
	}


	return <div>
		{questions.map((item, index) => {
				if (item.type == "text") {

					return <div style={{marginTop: 30}}><MyTextField returnAnswer={returnAnswer} index={index}
																													 title={item.title}/></div>

				} else if (item.type == "photo") {

					return <div style={{marginTop: 30}}><UploadFile returnAnswer={returnAnswer} index={index}
																													title={item.title}/></div>

				} else if (item.type == "select_with_future") {
					return (<div style={{marginTop: 30}}>
						<SuperSelect answers={item.answers} title={item.title} index={index} returnAnswer={returnAnswer}/>
					</div>)
				} else if (item.type == "radio") {
					return (<RadioFututureText
							key={index}
							title={item.title}
							answers={item.answers}
							returnAnswer={returnAnswer}
							id={index}
							index={index}
							values={item.answers}/>
					)
				}

			}
		)
		}
	</div>
}

export default Applicant;