import { LOGIN, LOGOUT } from "./constants.js"

const logOut = () => {
    return {
        type: LOGOUT
    }
}

const logIn = ({isAuth, login, password }) => {
    return {
        type: LOGIN,
        payload: {
            isAuth,
            login,
            password
        }
    }
}

export {
    logIn,
    logOut,
}
