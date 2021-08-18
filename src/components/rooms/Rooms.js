import { nanoid } from 'nanoid';
import React, { useEffect, useReducer, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { addRoomAction, setRooms } from '../../actions/roomsActions';
import roomsReducer from '../../reducers/roomsReducer';
import { getRoomsFromDB, postRoomInDB } from '../../server/db';
import Loader from '../main/Loader';
// import Axios from 'axios';

const Rooms = (props) => {

    // const [rooms, setRooms] = useState([
    //     {
    //         name: "bananas",
    //         id: nanoid()
    //     },
    //     {
    //         name: "cats",
    //         id: nanoid()
    //     }
    // ]);

    const [rooms, dispatchRooms] = useReducer(roomsReducer, [])

    const [isRoomLoaded, setIsRoomLoaded] = useState(false);

    const history = useHistory()

    // useEffect(()=>{
    //     (async ()=>{
    //         try{
    //             for(let room of rooms){
    //                 let res = Axios.post(process.env.REACT_APP_DB + "rooms.json", room)
    //                 console.log(res.data)
    //             }   
    //         }catch(e){
    //             console.log(e)
    //         }
    //     })()
    // }, [rooms])


    useEffect(() => {
        getRoomsFromDB().then((room)=>{
            console.log(room, 'room')
            dispatchRooms(setRooms(room))
            setIsRoomLoaded(true);
        })
    },[])

    const onSubmitButton = (event) => {
        event.preventDefault();
        let roomName = event.target.children[0].value.trim();
        if (roomName.length > 0) {
            // props.history.push(`/room/${roomName}`)
            // setRooms(rooms.concat({
            //     name: roomName,
            //     id: nanoid()
            // }))
            // console.log(roomName)
            // dispatchRooms(addRoomAction({
            //     name: roomName,
            //     id: nanoid()
            // }))
            postRoomInDB(roomName).then((roomID) =>{
                history.push("/chatroom/"+ roomID)
            })
        }
    }

    return (
        <div className="rooms">
            <div className="rooms__section">
                <h3>Choose room: </h3>
                {
                    rooms.map((room) => (
                        <div className="room" key={room.id}>
                            <Link to={`/room/${room.id}`}>{room.name}</Link>
                        </div>
                    ))
                }
            </div>
            <div>
                <h3>Create Room:</h3>
                <form onSubmit={onSubmitButton}>
                    <input className="rooms__input-new" placeholder="new room" />
                    <button type="submit" className="rooms__button-new">Create</button>
                </form>
                <Link to="/login">Login example link </Link>
            </div>
            {!isRoomLoaded && <Loader />}
        </div>
    )
};

export default Rooms;