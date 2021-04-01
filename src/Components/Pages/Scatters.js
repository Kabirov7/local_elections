import React, {useEffect, useState} from "react";
import Scatter2d from "../form/scatter2d";
import firebase from "../../util/Firebase";
import SelectBox from "../form/selectBox";
import {Grid} from "@material-ui/core";
import ScatterLine from "../form/scatter1d";

const Scatters = props => {
	const [applicants, setApplicants] = useState([]);
	const [applicantsForScatter2d, setApplicantsForScatter2d] = useState([]);
	const [applicantsForScatterLine, setApplicantsForScatterLine] = useState([]);
	const [axises, setAxises] = useState({});
	const [axisX, setAxisX] = useState(null);
	const [axisY, setAxisY] = useState(null);

	useEffect(() => {
		const db = firebase.firestore();
		db.collection("applicants")
			.onSnapshot((querySnapshot) => {
				let currApplicants = [];
				querySnapshot.forEach((doc) => {
					currApplicants.push(doc.data());
				});
				setApplicants(currApplicants);
			});

		db.collection("questions").doc("axises")
			.onSnapshot((doc) => {
				setAxises(doc.data().axises);
				// setResults(Object.keys(doc.data().axises).forEach(v => doc.data().axises[v] = 0))
			});
	}, [])

	useEffect(() => {
		if (axisX && axisY && applicants) {
			let people = applicants.map((el, i) => {
				let person = {
					name: el.name + " " + el.lastName + " " + el.party,
					symbolSize: 12,
					data: [[el.axises[axisX.axis], el.axises[axisY.axis]]],
					type: 'scatter',
					symbol: 'circle',
					color: `#21${i}775`,
					emphasis: {
						label: {
							show: true,
							formatter: el.name + " " + el.lastName,
							position: 'top'
						}
					}
				}
				return person
			})
			setApplicantsForScatter2d(people)
		}

		let peopleLine = Object.keys(axises).map(axis => {
			let scatterType = applicants.map((applicant, index) => {
				let person = {
					name: applicant.name + " " + applicant.lastName + " " + applicant.party,
					symbolSize: 12,
					data: [applicant.axises[axis]],
					type: 'scatter',
					symbol: 'circle',
					color: `#21${index}775`,
					emphasis: {
						label: {
							show: true,
							formatter: applicant.name + " " + applicant.lastName,
							position: 'top'
						}
					}
				}
				return person
			})
			return {axisName: axises[axis], data:scatterType}
		});
		setApplicantsForScatterLine(peopleLine)
	}, [applicants, axisX, axisY]);

	function getKeyByValue(value) {
		return Object.keys(axises).find(key => axises[key] === value);
	}

	const returnAxisX = (answer) => {
		const axis = getKeyByValue(answer)
		setAxisX({title: answer, axis: axis})
	}

	const returnAxisY = (answer) => {
		const axis = getKeyByValue(answer)
		setAxisY({title: answer, axis: axis})

	}

	return (
		<div>
			{<Grid container spacing={2}>
				<Grid item xs>
					<SelectBox title={"Выберите ось X"} exist={(axisY) ? axisY.title: ""} answers={Object.values(axises).sort()}
										 returnAnswer={returnAxisX}/>
				</Grid>
				<Grid item xs>
					<SelectBox title={"Выберите ось Y"} exist={(axisX) ? axisX.title: ""} answers={Object.values(axises).sort()}
										 returnAnswer={returnAxisY}/>
				</Grid>
			</Grid>}

			<Scatter2d applicants={applicantsForScatter2d}/>

			{applicantsForScatterLine.map((item, i) => <ScatterLine data={item.data} axisName={item.axisName}/>)}
		</div>
	)
}

export default Scatters;