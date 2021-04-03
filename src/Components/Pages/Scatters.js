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
	const [myAxises, setMyAxises] = useState({});
	const [axisX, setAxisX] = useState(null);
	const [axisY, setAxisY] = useState(null);
	const [nearestApplicant, setNearestApplicant] = useState(null)
	const [nearestByTwoAxis, setNearestByTwoAxis] = useState(null)
	const [nearestApplicantsLine, setNearestApplicantsLine] = useState({})

	const euclidian_distance = require('euclidean-distance')


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
		setMyAxises({
			crime: 0.34,
			corruption: 0.5,
			economy: -0.4,
			womens_rights: 1,
			human_rigths: -1,
			freedom_of_speech: -0.555,
			with_rus: 0.43,
			with_west: 1.1,
			with_ch: -1.1,
			domestic_policy: 1.1,
			atambaev: -0.3,
			japarov: -0.9,
			matraimov: 2,
			jeenbekov: 0,
		})


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

			people.push({
				name: "Я",
				symbolSize: 12,
				data: [[myAxises[axisX.axis], myAxises[axisY.axis]]],
				type: 'scatter',
				symbol: 'emptyCircle',
				color: `#d902ff`,
				emphasis: {
					label: {
						show: true,
						formatter: "Я",
						position: 'top'
					}
				}
			})
			setApplicantsForScatter2d(people)


		}

		if (axisX && axisY) {
			let minDistance = Infinity;
			applicants.map((applicant, index) => {
				let distance = euclidian_distance([myAxises[axisX.axis], myAxises[axisY.axis]], [applicant.axises[axisX.axis], applicant.axises[axisY.axis]])
				if (distance < minDistance) {
					minDistance = distance;
					let nearest = {distance: distance, party: applicant}
					setNearestByTwoAxis(nearest);
					console.log("nearest => ", nearest)
				}
			})
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
			scatterType.push({
				name: "Я",
				symbolSize: 12,
				data: [myAxises[axis]],
				type: 'scatter',
				symbol: 'emptyCircle',
				color: `#d902ff`,
				emphasis: {
					label: {
						show: true,
						formatter: "Я",
						position: 'top'
					}
				}
			})
			return {axisName: axises[axis], data: scatterType}
		});
		setApplicantsForScatterLine(peopleLine)

		const allKeyses = Object.keys(axises).sort();

		const myArray = allKeyses.map(key => myAxises[key]);

		let minDistance = Infinity;
		let nearestPartyDistance = applicants.map((applicant, index) => {
			let arrayApplicant = [];
			allKeyses.map((key, el) => {
				arrayApplicant.push(applicant.axises[key])
			})

			let currentDistance = euclidian_distance(arrayApplicant, myArray)
			if (currentDistance < minDistance) {
				minDistance = currentDistance;
				let nearestApplicant = {
					distance: currentDistance,
					applicant: applicant,
				}
				setNearestApplicant(nearestApplicant)
			}
		})

		let applicantsForLine = {};
		let nearestByAxis = Object.keys(axises).map(key => {
			let minDistance = Infinity;
			applicants.forEach((applicant, i) => {
				let currentDistance = euclidian_distance([applicant.axises[key]], [myAxises[key]])
				if (currentDistance < minDistance) {
					minDistance = currentDistance
					let nearest = {
						distance: currentDistance,
						applicant: applicant
					}
					applicantsForLine[key] = nearest
				}
			})
		})

		setNearestApplicantsLine(applicantsForLine)
	}, [applicants, axisX, axisY, axises]);

	function getKeyByValue(object, value) {
		return Object.keys(object).find(key => object[key] === value);
	}

	const returnAxisX = (answer) => {
		const axis = getKeyByValue(axises, answer)
		setAxisX({title: answer, axis: axis})
	}

	const returnAxisY = (answer) => {
		const axis = getKeyByValue(axises, answer)
		setAxisY({title: answer, axis: axis})

	}

	return (
		<div>
			<h2>Ближайшая вам партия по всем взглядам {nearestApplicant ? nearestApplicant.applicant.party : ""} <br/>
				Расстояние до них {nearestApplicant ? nearestApplicant.distance : ""}</h2>
			{<Grid container spacing={2}>
				<Grid item xs>
					<SelectBox title={"Выберите ось X"} exist={(axisY) ? axisY.title : ""} answers={Object.values(axises).sort()}
										 returnAnswer={returnAxisX}/>
				</Grid>
				<Grid item xs>
					<SelectBox title={"Выберите ось Y"} exist={(axisX) ? axisX.title : ""} answers={Object.values(axises).sort()}
										 returnAnswer={returnAxisY}/>
				</Grid>
			</Grid>}

			<Scatter2d applicants={applicantsForScatter2d}/>
			<h2> Ближайшая партия на основе двух осей: {nearestByTwoAxis ? nearestByTwoAxis.party.party : "ввв"}</h2>


			{applicantsForScatterLine.map((item, i) => {
				let currentAxis = getKeyByValue(axises, item.axisName)
				let currentApplicant = nearestApplicantsLine[currentAxis]
				return (
					<div>
						<ScatterLine data={item.data} axisName={item.axisName}/>
						<h2>Ближайшая партия на этой оси {currentApplicant.applicant.party},
							расстояние {currentApplicant.distance}</h2>
					</div>
				)
			})
			}
		</div>
	)
}

export default Scatters;