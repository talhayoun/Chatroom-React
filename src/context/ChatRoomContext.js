import React, { createContext, useEffect, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { addMessageAction, showChatroomData } from '../actions/chatroomActions';
import chatroomReducer, { initialchatroomState } from '../reducers/chatroomReducer';
import { getData } from '../server/db';

export const ChatroomContext = createContext();

const ChatroomContextProvider = (props) => {

    const [chatroomState, chatroomDispatch] = useReducer(chatroomReducer, initialchatroomState)
        // let roomname = props.children.props.roomName;

    const history = useHistory();

    useEffect(()=>{
        console.log("CONTEXT")
        let res = getData(props.roomID).then(
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
    },[props.roomID, history])


    return (
        <ChatroomContext.Provider value={{ chatroomState, chatroomDispatch }}>
            {props.children}
        </ChatroomContext.Provider>
    );
};

export default ChatroomContextProvider;
