import React, { useContext, useEffect, useState } from 'react';
import { ChatroomContext } from '../../context/ChatRoomContext';
import PrivateMessage from './PrivateMessage';
import SearchUsers from './SearchUsers';

const ChatroomUsers = (props) => {

    const { chatroomState } = useContext(ChatroomContext);
    const [usersToDisplay, setUsersToDisplay] = useState([...chatroomState.users])
    // const [usersToDisplay, setUsersToDisplay] = useState([..])
    const [privateMessages, setPrivateMessages] = useState(null);

    useEffect(()=>{
        setUsersToDisplay([...chatroomState.users])
    }, [chatroomState.users]);

    const searchUsers = (searchValue) => {
        const users = [...chatroomState.users];
        setUsersToDisplay(searchValue === "" ? users : users.filter((user) => user.username.toLowerCase().includes(searchValue)))
    }


    // useEffect(()=>{
    //     console.log("------------")
    //     let roomname = props.children.roomName;
    //     console.log(roomname, "######")
        // let res = getData(roomname).then((result)=>{
        //     console.log("wow0")
        //     const roomName = result.name;
        //     const users = result.users;
        //     console.log(result, "resul")
        //     chatroomDispatch(showChatroomData(users, roomName))
        // });
    // },[])


    // const privateMessage = (event) => {
    //     setPrivateMessages(event.target.innerHTML);
    // }

    return (
        <div className="chatroom__users">
            <h3>Users</h3>
            <SearchUsers searchUsers={searchUsers} />
            {/* {usersToDisplay.map((user) => (
                <div className="user" key={user.id} onClick={() => { setPrivateMessages(user.username) }}>{user.username}</div>
            ))} */}
            {usersToDisplay.map((user) => (
                <div className="user" key={user.id} onClick={() => { setPrivateMessages(user.username) }}>{user.username}</div>
            ))}
            {/* <PrivateMessage privateMessage={privateMessage} /> */}
            {privateMessages === null ? null : <PrivateMessage privateMessage={privateMessages} setPrivateMessages={setPrivateMessages} />}
        </div>
    );
};

export default ChatroomUsers;