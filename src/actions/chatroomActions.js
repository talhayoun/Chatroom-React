export const addMessageAction = (message) => ({
    type: "ADD_MESSAGE",
    message
});


export const removeMessagesAction = (index) => ({
    type: "REMOVE_MESSAGE",
    index
})

export const showChatroomData = (users, roomName) => ({
    type: "ROOM_DATA",
    users,
    roomName
})