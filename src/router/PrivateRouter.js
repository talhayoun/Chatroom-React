import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { Route } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { userData } = useContext(LoginContext);
    return (
        <Route
            {...rest}
            component={(props) => (
                !!userData.user ?
                    <Component {...props} /> :
                    <Redirect to={{ pathname: "/login", state: { needToLogin: true } }} />
            )}
        />);
}

export default PrivateRoute