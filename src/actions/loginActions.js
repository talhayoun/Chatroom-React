export const loginAction = (username) => ({
    type: "LOGIN",
    user: {
        username: "ReactIsTheBest",
        id: "11"
    }
});

export const logoutAction = () => ({
    type: "LOGOUT"
})