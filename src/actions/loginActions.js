// export const loginAction = (username) => ({
//     type: "LOGIN",
//     user: {
//         username: "ReactIsTheBest",
//         id: "11"
//     }
// });
export const loginAction = ({user, token}) => ({
    type: "LOGIN",
    user,
    token
});

export const logoutAction = () => ({
    type: "LOGOUT"
})