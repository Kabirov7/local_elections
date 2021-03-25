import React, {useEffect, useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import MySelectBox from "../form/select";
import MyTextField from "../form/TextField";
import firebase from "../../util/Firebase";
import storage from "../../util/Firebase";
import SuperSelect from "../form/superSelect";

const Applicant = () => {
	const [questions, setQuestions] = useState([]);
	const [answers, setAnswers] = useState([]);

	useEffect(() => {
		const db = firebase.firestore();
		db.collection("fields").doc("applicant")
			.onSnapshot((doc) => {
				setQuestions(doc.data().questions);
			});
	})


	const returnAnswer = (answer, index) => {
		const tmp = [...answers]
		tmp[index] = answer
		setAnswers(tmp)
		console.log(tmp)
	}
	const updateState = (answer, index) => {
		const tmp = [...answers]
		tmp[index] = answer
		setAnswers({[index]: tmp})
	}
	return <div>
		{questions.map((item, index) => {
				if (item.type == "text") {

					return <MyTextField returnAnswer={returnAnswer} index={index}
															title={item.title}/>

				} else if (item.type == "photo") {

					return <div>  {item.type}</div>

				} else if (item.type == "select_with_future") {
					return (<div>
						<SuperSelect answers={item.answers} title={item.title} index={index} returnAnswer={returnAnswer}/>
					</div>)


				}
			}
		)
		}
		<button onClick={() => console.log(answers)}>Show answers</button>
	</div>
}

export default Applicant;