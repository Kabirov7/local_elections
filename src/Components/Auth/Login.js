import React, {useState, useContext, useCallback, useEffect} from "react";
import firebase from "../../util/Firebase";
import MyTextField from "../form/TextField";
import {withRouter, Redirect} from "react-router";
import {AuthContext} from "../../util/Auth";
import {Button} from "@material-ui/core";

const Login = ({history}) => {
	const [phone, setPhone] = useState(null);
	const [otp, setOtp] = useState(null);
	const [sentCode, setSentCode] = useState(null);

	const {currentUser} = useContext(AuthContext)

	if (currentUser) {
		return <Redirect to={"/applicants"}/>
	}

	const returnphone = (answer) => {
		setPhone(answer)
	}

	const returnotp = (answer) => {
		setOtp(answer)
	}

	const setUpRecaptcha = () => {
		window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
			'size': 'invisible',
			'callback': (response) => {
				console.log("Captcha Resolved");
				// reCAPTCHA solved, allow signInWithPhoneNumber.
				onSignInSubmit();
			}

		});
	};

	const onSignInSubmit = () => {
		setUpRecaptcha();
		const phoneNumber = phone;
		console.log(phoneNumber)
		const appVerifier = window.recaptchaVerifier;
		firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
			.then((confirmationResult) => {
				window.confirmationResult = confirmationResult;
				console.log("OTP is sent");
				setSentCode(true)
			}).catch((error) => {
			console.log(error)
		});

	}

	const onSubmitOtp = (e) => {
		let otpInput = otp;
		let optConfirm = window.confirmationResult;
		// console.log(codee);
		optConfirm
			.confirm(otpInput)
			.then(function (result) {
				let user = result.user;
				console.log("user => ", user);
			})
			.catch(function (error) {
				console.log(error);
				alert("Incorrect OTP");
			});
	};

	return (
		<div style={{marginTop: 50}}>
			<div id="recaptcha-container"></div>
			<div>
				<MyTextField
					index={0}
					disabled={sentCode}
					response={phone}
					returnAnswer={returnphone}
					label={"+996555333222"}
					title={"Ваш номер"}/>
				{!(sentCode) &&
				<Button
					style={{marginTop: 15}}
					variant="contained"
					color="primary"
					onClick={() => onSignInSubmit()}
				>
					отправить сообщение
				</Button>}</div>
			{(sentCode) && <div style={{marginTop: 20}}>
				<MyTextField index={1}
										 response={0}
										 label={"Код из смс"}
										 returnAnswer={returnotp}
										 title={"Напишите код из смс"}/>
				<Button
					style={{marginTop: 15}}
					variant="contained"
					color="secondary"
					onClick={() => onSubmitOtp()}>
					OTP
				</Button></div>}
		</div>
	)
}

export default withRouter(Login);
