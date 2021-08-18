import React from 'react';
import LoginContextProvider from '../../context/LoginContext';
import LoginPage from './LoginPage';

const loginLoader = (props) => {
    return (
        <LoginContextProvider>
            <LoginPage />
        </LoginContextProvider>
    )
}

export default loginLoader;