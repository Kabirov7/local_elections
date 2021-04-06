import React, {useState, useContext, useCallback, useEffect} from "react";
import firebase, {signInWithGoogle, signInAnonymously} from "../../util/Firebase";
import {withRouter, Redirect} from "react-router";
import {AuthContextUsers} from "../../util/AuthUsers";
import {Button} from "@material-ui/core";

const LoginUsers = ({history}) => {
	const [phone, setPhone] = useState(null);
	const [otp, setOtp] = useState(null);
	const [sentCode, setSentCode] = useState(null);
	const [texts, setTexts] = useState([]);
	const [language, setLanguage] = useState(null);

	const {currentUser} = useContext(AuthContextUsers)

	if (currentUser) {
		return <Redirect to={"/users"}/>
	}

	const returnLanguage = (answer) => {
		setLanguage(["ru", "kg"][answer.split("_")[1] - 1])
	}

	return (
		<div style={{marginTop: 50}}>
		<Button
		onClick={() => signInAnonymously()}
		>
			войти анонимно
		</Button>
			<Button
		onClick={() => signInWithGoogle()}
		>
			ВойтиКакЮЗЕр
		</Button>
		</div>
	)
}

export default withRouter(LoginUsers);
