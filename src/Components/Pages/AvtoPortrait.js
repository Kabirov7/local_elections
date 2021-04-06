import React, {useEffect, useState} from "react";
import firebase from "../../util/Firebase";
import Grid from "@material-ui/core/Grid";

const AvtoPortrait = (props) => {
	const [texts, setTexts] = useState(null);
	const [axisesName, setAxisesName] = useState([])
	const {axises, currentAxises} = props;

	useEffect(() => {
		const db = firebase.firestore();
		db.collection("texts").doc("matrix")
			.onSnapshot((doc) => {
				setTexts(doc.data().matrix_answers);
			});
		const axisesName = [
			'Права человека',
			"Экономика",
			'Свобода слова',
			'Права женщин',
			'Коррупция',
			'Криминал',
			'Отношения с Западом',
			'Отношения с Россией',
			'Отношения с Китаем',
			'Атамбаев',
			'Жээнбеков',
			'Жапаров',
			'Матраимовы'
		]
		setAxisesName(axisesName)
	}, [])

	function getKeyByValue(object, value) {
		return Object.keys(object).find(key => object[key] === value);
	}

	return (<Grid container
								spacing={1}
								xs={12}
								direction="row-reverse"
								justify="space-evenly"
								alignItems="flex-start">
		{texts && axisesName.map((item, index) => {
			// if (item != "Внутренняя политика") {
				let ccc = currentAxises;
				let axisKey = getKeyByValue(axises, item);
				let currentAxis = currentAxises[axisKey]
				let text;
				// debugger
				if (currentAxis >= -2 && currentAxis <= -1.11) {
					text = texts[axisKey].m_2_m_1
				} else if (currentAxis >= -1.1 && currentAxis <= -0.61) {
					text = texts[axisKey].m_1_m_06
				} else if (currentAxis >= -0.60 && currentAxis <= -0.21) {
					text = texts[axisKey].m_06_m02
				} else if (currentAxis >= -0.2 && currentAxis <= 0.21) {
					text = texts[axisKey].m_02_p_02
				} else if (currentAxis >= 0.21 && currentAxis <= 0.6) {
					text = texts[axisKey].p_02_p_06
				} else if (currentAxis >= 0.61 && currentAxis <= 1.1) {
					text = texts[axisKey].p_06_p_1
				} else if (currentAxis >= 1.11 && currentAxis <= 2) {
					text = texts[axisKey].p_1_p_2
				}
				return (

					<Grid item xs={4}>
						<h4>{item}</h4>
						<p>{text}</p>
					</Grid>
				)
			// }
		})}
	</Grid>)
}

export default AvtoPortrait;