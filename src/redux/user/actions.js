import AuthService from "../../model/services/authService";

export const LOGIN_USER = 'LOGIN_USER';
export const REGISTRATION_USER = 'REGISTRATION_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

const createAction = (type, payload) => {
    return {
        type,
        payload
    }
}

export const loginUser = (login, password) => {
    return (dispatch) => {
        AuthService.signIn(login, password)
        .then(() => {
            dispatch(createAction(LOGIN_USER, true));
        })
        .catch(() => {
            dispatch(createAction(LOGIN_USER, false));
        })
    }
}

export const registrationUser = (login, password) => {
    return dispatch => {
        AuthService.signUp(login, password)
        .then(() => {
            dispatch(createAction(REGISTRATION_USER, true));
        })
        .catch(() => {
            dispatch(createAction(REGISTRATION_USER, false));
        })
    }
}

export const logoutUser = () => {
    return dispatch => {
        AuthService.logout();
        dispatch(createAction(LOGOUT_USER));
    }
}