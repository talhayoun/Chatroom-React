import React, { useContext } from 'react';
import { removeMessagesAction } from '../../actions/chatroomActions';
import { ChatroomContext } from '../../context/ChatRoomContext';
import { LoginContext } from '../../context/LoginContext';

const Message = ({ message, index }) => {
    const { userData } = useContext(LoginContext);
    console.log(userData)
    const isMyMessage = message.user.id === userData.user.id;
    const { chatroomDispatch } = useContext(ChatroomContext);

    const onClickDelete = () => {
        // deleteMessage(index);
        chatroomDispatch(removeMessagesAction(index))
    }

    return (
        <div key={message.id} className={isMyMessage ? "my-message" : "message"}>
            <div className="username">
                {message.user.username}
                {isMyMessage && <div onClick={onClickDelete} className="deleteButton">X</div>}
            </div>
            <div className="content">
                {message.message}
            </div>
        </div>
    )
};

export default Message;

