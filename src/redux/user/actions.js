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

export const loginUser = (login, password) => async (dispatch) => {
    try {
      await AuthService.signIn(login, password);
      dispatch(createAction(LOGIN_USER, true));
    } catch (error) {
      dispatch(createAction(LOGIN_USER, false));
    }
  };
  

  export const registrationUser = (login, password) => async (dispatch) => {
    try {
      await AuthService.signUp(login, password);
      dispatch(createAction(REGISTRATION_USER, true));
    } catch (error) {
      dispatch(createAction(REGISTRATION_USER, false));
    }
  };

  export const logoutUser = (login, password) => async (dispatch) => {
    try {
       AuthService.logout(login, password);
      dispatch(createAction(LOGOUT_USER, true));
    } catch (error) {
      dispatch(createAction(LOGOUT_USER, false));
    }
  };