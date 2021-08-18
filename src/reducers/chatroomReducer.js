import { nanoid } from "nanoid";

// export const initialchatroomState = {
//     users: [
//         {
//             username: "Moshe",
//             id: "1"
//         },
//         {
//             username: "Natan",
//             id: "2"
//         },
//         {
//             username: "Shir",
//             id: "3"
//         },
//         {
//             username: "Michal",
//             id: "4"
//         }
//     ],
//     messages: [
//         {
//             message: "Hey",
//             id: nanoid(),
//             user: {
//                 username: "Shir",
//                 id: "3"
//             }
//         },
//         {
//             message: "Bye",
//             id: nanoid(),
//             user: {
//                 username: "ReactIsTheBest",
//                 id: "11"
//             }
//         }
//     ]
// }

export const initialchatroomState = {
    isRoomExist: false,
    name: "",
    users:[],
    messages:[]
}

const chatroomReducer = (chatroomState, action) => {

    switch (action.type) {
        case "ADD_MESSAGE":
            return { ...chatroomState, messages: chatroomState.messages.concat(action.message) }
        case "REMOVE_MESSAGE":
            let newMessages = [...chatroomState.messages];
            newMessages.splice(action.index, 1);
            return { ...chatroomState, messages: newMessages }
        case "ROOM_DATA":
            let users = action.users;
            let roomName = action.roomName;
            return { users, roomName, messages: [], isRoomExist: true};
        default:
            return { ...chatroomState };
    }
};

export default chatroomReducer;