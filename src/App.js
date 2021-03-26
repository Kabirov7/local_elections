import './App.css';
import MyTextField from "./Components/form/TextField";
import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ForApplicants from "./Components/Pages/ForApplicants";
import {
	BrowserRouter as Router,
	Route,
} from "react-router-dom";

const App = () => {
	return (
		<div>
			<Router>
				<div className="App">
					<Route exact path={"/local_elections/applicants/"} component={ForApplicants}/>
				</div>
			</Router>
		</div>
	);
}

export default App;