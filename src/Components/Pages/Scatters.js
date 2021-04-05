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
	const [uniqueParties, setUniqueParties] = useState(null);
	const [averageParties, setAverageParties] = useState(null);

	const euclidian_distance = require('euclidean-distance')


	useEffect(() => {

		const db = firebase.firestore();

		db.collection("questions").doc("axises")
			.onSnapshot((doc) => {
				setAxises(doc.data().axises);
				// setResults(Object.keys(doc.data().axises).forEach(v => doc.data().axises[v] = 0))
			});

		db.collection("applicants")
			.onSnapshot((querySnapshot) => {
				let currApplicants = [];
				querySnapshot.forEach((doc) => {
					currApplicants.push(doc.data());
				});
				setApplicants(currApplicants);
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
		if (axisX && axisY && averageParties) {
			let people = averageParties.map((el, i) => {
				let person = {
					name: el.party,
					symbolSize: 12,
					data: [[el.axises[axisX.axis], el.axises[axisY.axis]]],
					type: 'scatter',
					symbol: 'circle',
					color: `#21${i}775`,
					emphasis: {
						label: {
							show: true,
							formatter: el.party,
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
			averageParties.map((party, index) => {
				let distance = euclidian_distance([myAxises[axisX.axis], myAxises[axisY.axis]], [party.axises[axisX.axis], party.axises[axisY.axis]])
				if (distance < minDistance) {
					minDistance = distance;
					let nearest = {distance: distance, party: party}
					setNearestByTwoAxis(nearest);
				}
			})
		}

		let peopleLine = Object.keys(axises).map(axis => {
			let scatterType = averageParties.map((party, index) => {
				let person = {
					name: party.party,
					symbolSize: 12,
					data: [party.axises[axis]],
					type: 'scatter',
					symbol: 'circle',
					color: `#21${index}775`,
					emphasis: {
						label: {
							show: true,
							formatter: party.party,
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

		if (averageParties) {
			let minDistance = Infinity;
			let nearestPartyDistance = averageParties.map((party, index) => {
				let arrayParty = [];
				allKeyses.map((key, el) => {
					arrayParty.push(party.axises[key])
				})

				let currentDistance = euclidian_distance(arrayParty, myArray)
				if (currentDistance < minDistance) {
					minDistance = currentDistance;
					let nearestApplicant = {
						distance: currentDistance,
						party: party,
					}
					setNearestApplicant(nearestApplicant)
				}
			})
		}

		let applicantsForLine = {};
		let nearestByAxis = Object.keys(axises).map(key => {
			let minDistance = Infinity;
			averageParties.forEach((party, i) => {
				let currentDistance = euclidian_distance([party.axises[key]], [myAxises[key]])
				if (currentDistance < minDistance) {
					minDistance = currentDistance
					let nearest = {
						distance: currentDistance,
						party: party
					}
					applicantsForLine[key] = nearest
				}
			})
		})

		setNearestApplicantsLine(applicantsForLine)
	}, [averageParties, axisX, axisY, axises]);

	useEffect(() => {
		let uniqueParties = [...new Set(applicants.map(item => item.party))];
		let allParties = {};
		let countAnswers = {};
		let sortParties = {}
		uniqueParties.map((party, key) => {
			allParties[key] = party
			countAnswers[key] = 0
			sortParties[key] = []

		})

		setUniqueParties(allParties)
		applicants.map((applicant, index) => {
			let partyKey = getKeyByValue(allParties, applicant.party)
			countAnswers[partyKey] += 1
			sortParties[partyKey].push(applicant)
		})

		const parties = uniqueParties.map((party, index) => {
			let currentAxises = {};
			let keyParty = getKeyByValue(allParties, party)
			Object.keys(axises).map((key, index) => currentAxises[key] = 0);
			let average = {
				party: keyParty
			}

			let currentParties = sortParties[keyParty]
			currentParties.map((item, id) => {
				Object.keys(currentAxises).map((key) => {
					currentAxises[key] += item.axises[key]
				})
			})

			Object.keys(axises).map((key) => {
				currentAxises[key] = currentAxises[key] / countAnswers[keyParty]

			})

			return {party: party, axises: currentAxises}

		})

		setAverageParties(parties)
	}, [applicants])

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
			<h2>Ближайшая вам партия по всем взглядам {nearestApplicant ? nearestApplicant.party.party : ""} <br/>
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
						<h2>Ближайшая партия на этой оси {currentApplicant ? currentApplicant.party.party : ""},
							расстояние {currentApplicant ? currentApplicant.distance : 0}</h2>
					</div>
				)
			})
			}
		</div>
	)
}

export default Scatters;