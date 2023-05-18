import * as actions from './actions';

const initialState = {
    isAuth: localStorage.getItem('token') != null ? true : false
}

export default function reducerUser(state = initialState, action){
     switch (action.type) {
        case actions.LOGIN_USER:
            return {
                ...state,
                isLoginStatus: action.payload,
                isAuth: action.payload
            }
        case actions.REGISTRATION_USER:
            return {
                ...state,
                isRegistrationStatus: action.payload,
                isAuth: action.payload
            }
        case actions.LOGOUT_USER:
            return {
                isAuth: false
            }
        default:
            return state;
    }
}