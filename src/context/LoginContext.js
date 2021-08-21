import React, { createContext, useReducer } from 'react';
import { getUserFromCookie } from '../cookies/cookie';
import loginReducer, { userDataInitialLoginState } from '../reducers/loginReducer';

export const LoginContext = createContext();

const LoginContextProvider = (props) => {
    const cookieUserData = getUserFromCookie();
    const [userData, dispatchUserData] = useReducer(loginReducer, cookieUserData || userDataInitialLoginState);

    return (
        <LoginContext.Provider value={{ userData, dispatchUserData }}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider