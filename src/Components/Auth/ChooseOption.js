import React, {useState, useContext, useCallback, useEffect} from "react";
import firebase, {signInWithGoogle, signInAnonymously} from "../../util/Firebase";
import {withRouter, Redirect} from "react-router";
import {AuthContextUsers} from "../../util/AuthUsers";
import {Button} from "@material-ui/core";

const ChooseOption = ({history}) => {
	const [page, setPage] = useState(null)
	const [language, setLanguage] = useState(null);

	const {currentUser} = useContext(AuthContextUsers)

	const returnLanguage = (answer) => {
		setLanguage(["ru", "kg"][answer.split("_")[1] - 1])
	}

	return (
		<div style={{marginTop: 50}}>
			<Button
				onClick={() => setPage("passTest")}
			>
				пройти тест снова
			</Button>
			<Button
				onClick={() => setPage("whatchResults")}
			>
				результаты
			</Button>
			{(page == "passTest") ?
				<Redirect to={"/users"}/> :
				(page == "whatchResults") ?
					<Redirect to={"/find"}/> :
				<div></div>}
		</div>
	)
}

export default withRouter(ChooseOption);
