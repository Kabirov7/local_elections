import React, {useEffect, useState} from "react";
import firebase from "../../util/Firebase";

const AvtoPortrait = (props) => {
	const [texts, setTexts] = useState(null);

	const {axises, currentAxises} = props;

	useEffect(() => {
		const db = firebase.firestore();
		db.collection("texts").doc("matrix")
			.onSnapshot((doc) => {
				setTexts(doc.data().matrix_answers);
			});
	}, [])

	function getKeyByValue(object, value) {
		return Object.keys(object).find(key => object[key] === value);
	}

	return (<div>
		{texts && Object.values(axises).map((item, index) => {
			let ccc = currentAxises;
			let axisKey = getKeyByValue(axises, item);
			let currentAxis = currentAxises[axisKey]
			let text;
			if (axisKey != "domestic_policy") {
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
			}
			return <div>
				<h4>{item}</h4>
				<p>{text}</p>
			</div>
		})}
	</div>)
}

export default AvtoPortrait;