import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { logoutAction } from '../../actions/loginActions';
import { LoginContext } from '../../context/LoginContext';
import { deleteUserFromCookie } from '../../cookies/cookie';

const Header = () => {

    // const { userData, dispatchUserData } = useContext(LoginContext);
    const { userData, dispatchUserData } = useContext(LoginContext);

    const history = useHistory();

    const onClickLogout = () => {
        dispatchUserData(logoutAction())
        deleteUserFromCookie()
        history.push("/home")
    }
    console.log(userData)

    return (
        <div className="header">
            <div className="header-nav">
                <div className="">
                    <NavLink to="/home" className="home-nav" activeClassName="activeClass">Home</NavLink>
                </div>
                <div>
                    <NavLink to="/rooms" activeClassName="activeClass">Rooms</NavLink>
                    {
                        !!userData.user ?
                            <div className="header__logout-nav" onClick={onClickLogout}>Logout</div>
                            :
                            <NavLink to="/login" activeClassName="activeClass">Login</NavLink>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;