import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loginAction } from '../../actions/loginActions';
import { LoginContext } from '../../context/LoginContext';


const LoginForm = (props) => {

    const { dispatchUserData } = useContext(LoginContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmailInputValid, setIsEmailInputValid] = useState(true);
    const [isPasswordInputValid, setIsPasswordInputValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");


    useEffect(() => {
        if (props.errorMessage !== "") {
            setErrorMessage(props.errorMessage);
        }
    }, [props.errorMessage])

    const isFormInvalid = () => {
        return email === "" || password === "";
    };

    const onBlurEmailInput = (event) => {
        const theEmail = event.target.value.trim();
        if (theEmail === "") {
            setEmail("");
            setIsEmailInputValid(false);
        } else {
            setEmail(theEmail);
            setIsEmailInputValid(theEmail);
        }
    }

    const onBlurPasswordInput = (event) => {
        const thePassword = event.target.value.trim();
        setPassword(thePassword === "" ? "" : thePassword);
        setIsPasswordInputValid(thePassword !== "");
    }


    const history = useHistory();

    const onSubmitForm = (e) => {
        e.preventDefault()
        dispatchUserData(loginAction())
        history.push("/rooms");
    }

    const onClickSubscribe = () => {
        props.setIsLoginMode(false);
    }

    return (
        <div className="login-form">
            <h3>Login</h3>
            {errorMessage !== "" && <div className="error-message">{errorMessage}</div>}
            <form>
                <input type="text" placeholder="Email" onBlur={onBlurEmailInput} />
                {!isEmailInputValid && <div className="invalid-message">You must enter your email</div>}
                <input type="password" placeholder="Password" onBlur={onBlurPasswordInput} />
                {!isPasswordInputValid && <div className="invalid-message">You must enter your password</div>}
                <div className="login-form__nav">
                    <button onClick={onSubmitForm} type="submit" disabled={isFormInvalid()}>Submit</button>
                    <div onClick={onClickSubscribe}>Subscribe</div>
                </div>
            </form>
        </div>
    )
}


export default LoginForm;