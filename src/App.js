import './App.css';
import MyTextField from "./Components/form/TextField";
import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Combinator from "./Components/Pages/Combinator";
import Login from "./Components/Auth/Login";
import AdminTable from "./Components/Pages/Admin";
import {
	HashRouter as Router,
	Route,
} from "react-router-dom";
import PrivateRoute from "./Components/Auth/PrivateRoute";
import {AuthProvider} from "./util/Auth"
import Scatters from "./Components/Pages/Scatters";
import firebase from "./util/Firebase";
import {Button} from "@material-ui/core";

const App = () => {
	return (
		<div className="App">
			<Router>
				<AuthProvider>
					<Router>
						<PrivateRoute data={{
							page_for: "user"
						}} exact path={"/applicants"}
													component={Combinator}/>
						<Route exact path={"/login"} component={Login}/>
					</Router>
				</AuthProvider>
				{/*<Scatters />*/}
				{/*<Route exact path={"/admin"} component={AdminTable}/>*/}
			</Router>
		</div>
	);
}

export default App;