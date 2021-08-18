import React, { useState } from 'react';
import LoginForm from './LoginForm';
import Subscribe from './Subscribe';

const LoginPage = (props) => {
    const errorMessage = props.location.state?.needToLogin ? "You must log in" : "";
    const [isLoginMode, setIsLoginMode] = useState(true);

    return (
        <div className="login">
            <div className="login-page_form">
                {isLoginMode ? <LoginForm setIsLoginMode={setIsLoginMode} errorMessage={errorMessage} /> : <Subscribe setIsLoginMode={setIsLoginMode} />}

            </div>
        </div>
    )
}

export default LoginPage;