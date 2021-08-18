import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import validator from 'validator';
import { loginAction } from '../../actions/loginActions';
import { LoginContext } from '../../context/LoginContext';

const Subscribe = (props) => {

    const { dispatchUserData } = useContext(LoginContext);

    const [inputClasses, setInputClasses] = useState(["", "", "", "", ""]);
    const [invalidMessages, setInvalidMessages] = useState(["", "", "", "", ""]);
    const [validInputs, setValidInputs] = useState([false, false, false, false, false]);
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");



    const isFormValid = () => {
        return validInputs.includes(false);
    };

    const validateInput = (value, inputindex, isValueValidFunc, setValue, missingValueMessage, InvalidValueMessage) => {
        const setStateOfInputs = (message, inputClass, isValidInput) => {
            const newInvalidMessages = [...invalidMessages];
            const newInputClasses = [...inputClasses];
            const newValidInputs = [...validInputs];

            newInvalidMessages[inputindex] = message;
            setInvalidMessages(newInvalidMessages);
            newInputClasses[inputindex] = inputClass;
            setInputClasses(newInputClasses);
            newValidInputs[inputindex] = isValidInput;
            setValidInputs(newValidInputs);
        };

        if (value.length > 0) {
            if (isValueValidFunc(value)) {
                setStateOfInputs("", "", true);
                setValue(value);
            } else {
                setStateOfInputs(InvalidValueMessage, "input-invalid", false);
            }
        } else {
            setStateOfInputs(missingValueMessage, "input-invalid", false);
        }
    };




    const onBlurUsernameInput = (event) => {
        const newUsername = event.target.value.trim();
        const isUsernameValid = (value) => {
            return value.toLowerCase() !== "moshe";
        };
        validateInput(newUsername, 0, isUsernameValid, setUsername, "You must enter username", "Username cannot be Moshe");
    }

    const onBlurAgeInput = (event) => {
        const newAge = event.target.value.trim();
        const isAgeValid = (value) => {
            return value > 11;
        };

        validateInput(newAge, 1, isAgeValid, setAge, "You must enter your age", "Too young");
    }


    const onBlurPasswordInput = (event) => {
        const newPassword = event.target.value.trim();
        const isPasswordValid = (value) => {
            const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;
            return passwordRegex.test(value);
        }
        validateInput(newPassword, 3, isPasswordValid, setPassword, "You must enter password", "Password must contain capital and regular characters, numbers and must be atleast 6 characters");
    }


    const onBlurPasswordRepeated = (event) => {
        const passwordRepeated = event.target.value.trim();
        const isPasswordRepeatedValid = () => {
            return password === passwordRepeated;
        }
        validateInput(passwordRepeated, 4, isPasswordRepeatedValid, () => { }, "You must enter your password again", "The password aren't identical");
    }

    const onBlurEmail = (event) => {
        const newEmail = event.target.value.trim();
        validateInput(newEmail, 2, validator.isEmail, setEmail, "You must enter your email", "Email invalid")
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(`Username : ${username}, password: ${password},\n email: ${email},age: ${age}`)
    }

    const onClickLogin = () => {
        props.setIsLoginMode(true);
    }

    const history = useHistory();

    const onSubmitForm = (e) => {
        e.preventDefault();
        dispatchUserData(loginAction());
        history.push("/rooms")
    }

    return (
        <div className="login-form">
            <h3>Subscribe</h3>
            <form onSubmit={onSubmit}>
                <input placeholder="Username" className={inputClasses[0]} onBlur={onBlurUsernameInput} />
                {invalidMessages[0] !== "" && <div className="invalid-message">{invalidMessages[0]}</div>}
                <input placeholder="Age" className={inputClasses[1]} onBlur={onBlurAgeInput} />
                {invalidMessages[1] !== "" && <div className="invalid-message">{invalidMessages[1]}</div>}
                <input placeholder="Email" className={inputClasses[2]} onBlur={onBlurEmail} />
                {invalidMessages[2] !== "" && <div className="invalid-message">{invalidMessages[2]}</div>}
                <input type="password" className={inputClasses[3]} placeholder="Password" onBlur={onBlurPasswordInput} />
                {invalidMessages[3] !== "" && <div className="invalid-message">{invalidMessages[3]}</div>}
                <input placeholder="Repeat email" className={inputClasses[4]} onBlur={onBlurPasswordRepeated} />
                {invalidMessages[4] !== "" && <div className="invalid-message">{invalidMessages[4]}</div>}
                <div className="login-form__nav">
                    <button onClick={onSubmitForm} type="submit" disabled={isFormValid()}>Submit</button>
                    <div onClick={onClickLogin}>Login</div>
                </div>
            </form>
        </div>
    )
}

export default Subscribe;