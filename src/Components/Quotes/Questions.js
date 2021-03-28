import React, {useEffect, useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import MySelectBox from "../form/select";
import MyTextField from "../form/TextField";
import firebase from "../../util/Firebase";
import SuperSelect from "../form/superSelect";
import UploadFile from "../form/upload_file";
import RadioButton from "../form/radioButton";
import Grid from '@material-ui/core/Grid';
import WarningText from "../form/warning";
import {Button, LinearProgress, List, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	formControl: {
		marginTop: "30px",
		margin: "0 auto",
		width: "70%",
	},
	typography: {
		fontSize: "24px"
	},
	pagination: {
		padding: 0,
		margin: "30px 0",
	}
}));

const Questions = (props) => {
	const [questions, setQuestions] = useState([]);
	const [answers, setAnswers] = useState([]);
	const [axises, setAxsises] = useState({});
	const [results, setResults] = useState();
	const [progress, setProgress] = useState(0);
	const [unAnswered, setUnAnswered] = useState([])
	const [showUnAnswered, setShowUnAnswered] = useState(null)
	const [answeredIds, setAnsweredIds] = useState(null)

	const [firstQuestions, setFirstQuestions] = useState(0);
	const [questionsOnThePage, setQuestionsOnThePage] = useState(30);

	const [currentQuestions, setCurrentQuestions] = useState([])


	const classes = useStyles();

	const {persons, returnAxisesAverage} = props;

	useEffect(() => {
		const db = firebase.firestore();
		db.collection("questions").doc("all_questions")
			.onSnapshot((doc) => {
				setQuestions(doc.data().questions);
			});

		db.collection("questions").doc("axises")
			.onSnapshot((doc) => {
				setAxsises(doc.data().axises);
				setResults(Object.keys(doc.data().axises).forEach(v => doc.data().axises[v] = 0))
			});
	}, [])

	const getAnsweredQuestions = () => {
		let ids = answers.map((item, id) => item && Object.keys(item)[0])
			.filter(Boolean);

		return ids.map(item => parseInt(item))
	}

	useEffect(() => {
		let answeredIds = getAnsweredQuestions();
		setProgress((answeredIds.length * 100) / questions.length)

		let allIds = questions.map((item, id) => id);
		allIds = allIds.map(i => (answeredIds.includes(i)) && i)
		allIds = allIds.slice(firstQuestions, firstQuestions + questionsOnThePage)
		setUnAnswered(allIds)

		if (answeredIds.length == questions.length & (questions != false)) {
			let answers_values = answers.map((item, id) => questions[id].values[item[id]])
			let axises_keys = Object.keys(axises);
			let all_axises = {};
			axises_keys.forEach(v => all_axises[v] = 0)

			let count_axises = {};
			axises_keys.forEach(v => count_axises[v] = 0)

			answers_values.map((el, id) => {
				Object.keys(el).forEach(key => {
					all_axises[key] += el[key];
					count_axises[key] += 1;
				})
			})

			let axises_average = {};
			Object.keys(all_axises).map((key, id) => {
				axises_average[key] = (all_axises[key]) ? all_axises[key] / count_axises[key] : 0;
			})

			setResults(axises_average);
			returnAxisesAverage(axises_average)
		}
	}, [answers])

/*	useEffect(() => {
		if (results) {
			const db = firebase.firestore();
			db.collection(persons).doc("test_applicant").set({results: results})
		}

	}, [results])*/

	const topFunction = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
	const checkAnswered = () => {
		let answeredIds = getAnsweredQuestions();

		let allIds = questions.map((item, id) => id);
		allIds = allIds.map(i => (answeredIds.includes(i)) && i)
		allIds = allIds.slice(firstQuestions, firstQuestions + questionsOnThePage)


		setUnAnswered(allIds)
		setShowUnAnswered(true)

		if (allIds.indexOf(false) != -1) {
			const el = document.getElementById(`question${allIds.indexOf(false) + firstQuestions}`)
			if (el) {
				el.scrollIntoView({
					behavior: "smooth",
					block: "start"
				})
			}
		} else {
			setFirstQuestions(firstQuestions + questionsOnThePage);
			setShowUnAnswered(null)
			topFunction();

		}
	}

	const previous = () => {
		setFirstQuestions(firstQuestions - questionsOnThePage);
		topFunction();
	}

	const returnAxisAnswer = (answer, index) => {
		const tmp = [...answers]
		tmp[index] = {[index]: answer}
		setAnswers(tmp)
		console.log(tmp)
	}
	return (
		<div>
			<LinearProgress style={{position: 'sticky', top: 0}} variant="determinate" value={(progress) ? progress : 0}/>
			<div style={{textAlign: "left",}}>
				{questions.slice(firstQuestions, firstQuestions + questionsOnThePage).map((item, index) => (
					<div id={"question" + (index + firstQuestions)}>
						<RadioButton
							key={index + firstQuestions}
							title={item.title}
							answers={item.answers.he}
							returnAnswer={returnAxisAnswer}
							id={index}
							ans={answers[firstQuestions + index]}
							index={index + firstQuestions}
							values={item.values}/>
						{!unAnswered.includes(index + firstQuestions) && (showUnAnswered) && <WarningText text="ОТВЕТЬТЕ ПЛИИИЗ"/>}
					</div>
				))}
			</div>
			<div className={classes.pagination}>
				{(firstQuestions + questionsOnThePage > questionsOnThePage) ?
					<Button variant="contained"
									color="secondary"
									onClick={() => previous()}>
						Previous
					</Button>
					:
					<div></div>
				}
				<Button variant="contained"
								color="primary"
								onClick={() => checkAnswered()}>
					Next
				</Button>
			</div>
		</div>
	)
}

export default Questions;