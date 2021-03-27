import './App.css';
import MyTextField from "./Components/form/TextField";
import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ForApplicants from "./Components/Pages/ForApplicants";
import Login from "./Components/Auth/Login";
import {
	BrowserRouter as Router,
	Route,
} from "react-router-dom";
import PrivateRoute from "./Components/Auth/PrivateRoute";
import {AuthProvider} from "./util/Auth"

const App = () => {
	return (
		<div className="App">
			<Router>
				<AuthProvider>
					<Router>
							<PrivateRoute exact path={"/applicants"} component={ForApplicants}/>
							<Route exact path={"/login"} component={Login}/>
					</Router>
				</AuthProvider>

			</Router>
		</div>
	);
}

export default App;