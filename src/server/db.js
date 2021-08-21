import Axios from 'axios';

const URLDB = process.env.REACT_APP_DB;

export const getRoomsFromDB = async (token) => {
    try{
        console.log("hello")
        const res = await Axios.get(URLDB + "rooms.json?auth=" +token)
        const rooms = []
        for(let id in res.data){
            rooms.push({
                id,
                name: res.data[id].name
            })
        }
        return rooms;
    }catch(e){
        console.log(e);
    }
}

export const postRoomInDB = async (name, token) => {
    try{
        const res = await Axios.post(URLDB + "rooms.json?auth=" + token, {name, users: []})
        return res.data.name
    }catch(err){
        console.log(err)
    }
}


export const getData = async (name, token)=> {
    try{
        console.log(`${URLDB}rooms/${name}.json`)
        const res = await Axios.get(`${URLDB}rooms/${name}.json?auth=${token}`);
        console.log(res.data, "res.data")
        if(!res.data){
            throw new Error("No such room")
        }
        return res.data
    }catch(err){
        console.log(err)
    }
}


