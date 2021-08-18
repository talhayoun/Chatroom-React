import React, { useContext } from 'react';
import { ChatroomContext } from '../../context/ChatRoomContext';
import AddMessage from './AddMessage';
import Message from './Messages';

const ChatroomMain = (props) => {

    const { chatroomState } = useContext(ChatroomContext);

    return (
        <div className="chatroom__main">
            <div>
                {/* <h3>Room Name: {props.roomName}</h3> */}
                <h3>Room Name: {chatroomState.name}</h3>
                {chatroomState.messages?.map((message, i) => (
                    <Message
                        key={message.id}
                        message={message}
                        // userId={props.userId}
                        // deleteMessage={props.deleteMessage} 
                        index={i}
                    />
                ))}
            </div>
            <AddMessage addMessage={props.addMessage} />
        </div >
    );
};

export default ChatroomMain;