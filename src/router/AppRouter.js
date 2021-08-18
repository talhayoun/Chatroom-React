import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from '../components/login/LoginPage';
import Header from '../components/main/Header';
import Rooms from '../components/rooms/Rooms';
import Home from "../components/home/Home";
import Footer from '../components/main/Footer';
import PageNotFound from '../components/main/PageNotFound';
import ChatroomLoader from '../components/chatroom/ChatroomLoader';
// import loginLoader from '../components/login/LoginLoader';
import LoginContextProvider from '../context/LoginContext';
import PrivateRoute from './PrivateRouter';
import LoginRoute from './LoginRoute';


const RouterMain = () => {
    return (
        <BrowserRouter>
            <LoginContextProvider>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/home" />
                    </Route>
                    <Route path="/home" component={Home} />
                    <LoginRoute path="/login" component={LoginPage} />
                    <PrivateRoute path="/rooms" component={Rooms} />
                    <PrivateRoute path="/room/:id"  component={ChatroomLoader} />
                    <Route path="*" component={PageNotFound} />
                </Switch>
                <Footer />
            </LoginContextProvider>
        </BrowserRouter>
    );
};

export default RouterMain;