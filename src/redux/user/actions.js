import AuthService from "../../services/authService";

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const auth = (login, password) => {
    return dispatch => {
        AuthService.signIn(login, password)
        .then(() => {
            dispatch({type: LOGIN_USER, payload: true})
        })
        .catch(() => {
            dispatch({type: LOGIN_USER, payload: false})
        })
    }
}