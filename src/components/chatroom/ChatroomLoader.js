import React, { useContext, useEffect } from 'react';
import ChatroomContextProvider, { ChatroomContext } from '../../context/ChatRoomContext';
import { getData } from '../../server/db';
import Chatroom from './Chatroom';

const ChatroomLoader = (props) => {
    console.log("LOADER")
    console.log(props)
    const roomID = props.match.params.id;
    
    return (
        <ChatroomContextProvider roomID={roomID}>
            <Chatroom/>
        </ChatroomContextProvider>
    )
};

export default ChatroomLoader;