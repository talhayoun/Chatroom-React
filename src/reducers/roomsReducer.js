// import { nanoid } from "nanoid";


// export const initialRoomsState = [
//     {
//         name: "bananas",
//         id: nanoid()
//     },
//     {
//         name: "cats",
//         id: nanoid()
//     }
// ]

// export const initialRoomsState = [
//     {
//         name: "cats",
//         users: [
//             {
//                 username:"moshe",
//                 id: "01"
//             },
//             {
//                 username:"david",
//                 id: "02"
//             },
//             {
//                 username:"ronen",
//                 id: "03"
//             },
//             {
//                 username:"shir",
//                 id: "04"
//             },
//             {
//                 username:"michal",
//                 id: "05"
//             }
//         ]
//     },
//     {
//         name:"cars",
//         users: [
//             {
//                 username:"moshe",
//                 id: "01"
//             },
//             {
//                 username:"david",
//                 id: "02"
//             },
//             {
//                 username:"ronen",
//                 id: "03"
//             },
//             {
//                 username:"shir",
//                 id: "04"
//             },
//             {
//                 username:"michal",
//                 id: "05"
//             }
//         ]
//     }
// ]

const roomsReducer = (rooms, action) => {
    console.log("llll")

    console.log(action.rooms)
    switch (action.type) {
        case "ADD_ROOM":
            return rooms.concat(action.room);
        case "SET_ROOM":
            return [...action.rooms];
        default:
            return [...rooms];

    }
};

export default roomsReducer;