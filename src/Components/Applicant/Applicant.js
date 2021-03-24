import React, {useEffect, useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import MySelectBox from "../form/select";
import MyTextField from "../form/TextField";
import firebase from "../../util/Firebase";

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

	useEffect(() => {
		console.log(answers)
	}, [answers])

	const returnAnswer = (answer, index) => {
		const tmp = answers
		tmp[index] = answer
		setAnswers(tmp)
		console.log(answers)

	}

	return <div>
		{questions.map((item, index) => {
			if (item.type == "text") {

				return <MyTextField returnAnswer={returnAnswer} index={index} title={item.title}/>

			} else if (item.type == "photo") {

				return <div>  {item.type}</div>

			} else if (item.type == "select_with_future") {

				return (<div>
					<MySelectBox
						title={item.title}
						index={index}
						answers={item.answers}
						returnAnswer={returnAnswer}/>
					{<MySelectBox
						title={item.next.title}
						index={"second" + index}
						answers={[]}
						returnAnswer={returnAnswer} />}
				</div>)
			}
		})}
	</div>
}

export default Applicant;