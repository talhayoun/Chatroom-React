import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { addMessageAction, showChatroomData } from '../actions/chatroomActions';
import chatroomReducer, { initialchatroomState } from '../reducers/chatroomReducer';
import { getData } from '../server/db';
import { LoginContext } from './LoginContext';

export const ChatroomContext = createContext();

const ChatroomContextProvider = (props) => {

    const [chatroomState, chatroomDispatch] = useReducer(chatroomReducer, initialchatroomState)
        // let roomname = props.children.props.roomName;
    const {userData} = useContext(LoginContext);
    const history = useHistory();

    useEffect(()=>{
        console.log("CONTEXT")
        let res = getData(props.roomID, userData.token).then(
            (roomData)=>{
                const roomName = roomData.name;
                const users = roomData.users || [];
                chatroomDispatch(showChatroomData(users, roomName))
            },
            (err)=>{
                if(err.message === "No such room"){
                    history.push("/not found")
                }
            }
        );
    },[props.roomID, history, userData.token])


    return (
        <ChatroomContext.Provider value={{ chatroomState, chatroomDispatch }}>
            {props.children}
        </ChatroomContext.Provider>
    );
};

export default ChatroomContextProvider;
