import AuthService from "../../model/services/authService";

export const LOGIN_USER = 'LOGIN_USER';
export const REGISTRATION_USER = 'REGISTRATION_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

const createState = (type, payload) => {
    return {
        type,
        payload
    }
}

export const loginUser = (login, password) => {
    return dispatch => {
        AuthService.signIn(login, password)
        .then(() => {
            dispatch(createState(LOGIN_USER, true));
        })
        .catch(() => {
            dispatch(createState(LOGIN_USER, false));
        })
    }
}

export const registrationUser = (login, password) => {
    return dispatch => {
        AuthService.signUp(login, password)
        .then(() => {
            dispatch(createState(REGISTRATION_USER, true));
        })
        .catch(() => {
            dispatch(createState(REGISTRATION_USER, false));
        })
    }
}

export const logoutUser = () => {
    return dispatch => {
        AuthService.logout();
        dispatch(createState(LOGOUT_USER));
    }
}