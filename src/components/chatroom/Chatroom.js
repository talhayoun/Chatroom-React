import React, { useContext, useEffect } from 'react';
import { ChatroomContext } from '../../context/ChatRoomContext';
import { getData } from '../../server/db';
import Loader from '../main/Loader';
import ChatroomMain from './ChatroomMain';
import ChatroomUsers from './ChatroomUser';
// import { nanoid } from 'nanoid';

const Chatroom = (props) => {

    const roomName = props.roomName;
    console.log("gg=====", props)

    // const myUser = {
    //     username: "ReactIsTheBest",
    //     id: "11"
    // };
    // const users = [
    //     {
    //         username: "Moshe",
    //         id: nanoid()
    //     },
    //     {
    //         username: "Natan",
    //         id: nanoid()
    //     },
    //     {
    //         username: "Shir",
    //         id: nanoid()
    //     },
    //     {
    //         username: "Michal",
    //         id: nanoid()
    //     }
    // ];

    // const [messages, setMessages] = useState([
    //     {
    //         message: "Hey",
    //         id: nanoid(),
    //         user: users[1]
    //     },
    //     {
    //         message: "Bye",
    //         id: nanoid(),
    //         user: myUser
    //     }
    // ])

    // const addMessage = (messageContent) => {
    //     setMessages(messages.concat({
    //         message: messageContent,
    //         id: nanoid(),
    //         user: myUser
    //     }))
    // };

    // const deleteMessage = (index) => {

    //     const copyMessages = [...messages];
    //     copyMessages.splice(index, 1);
    //     setMessages(copyMessages);

    // }

    const {chatroomState} = useContext(ChatroomContext)

    return (
        <div className="chatroom-container">
            {
                chatroomState.isRoomExist ?
                <div className="chatroom">
                    <ChatroomUsers
                    // users={users}
                    />
                    <ChatroomMain
                        // roomName={roomName}
                    // messages={messages}
                    // userId={myUser.id}
                    // addMessage={addMessage}
                    // deleteMessage={deleteMessage} 
                    />
                </div>
                :
                <Loader />
            }
        </div>
    )
};

export default Chatroom;