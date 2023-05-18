import { Provider as ReduxProvider } from 'react-redux';
import store from './store';
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser, registrationUser } from "./user/actions";

function buildProvider(){
    return (props)=> {
        return (
            <ReduxProvider store = {store}>     
            {props.children}  
            </ReduxProvider>
        );
    };
}

function useLogin(){
    const dispatch = useDispatch();
    return (login, password) => dispatch(loginUser(login, password));
}

function useRegistration(){
    const dispatch = useDispatch();
    return (login, password) => dispatch(registrationUser(login, password));
}

function useLogout(){
    const dispatch = useDispatch();
    return () => dispatch(logoutUser());
}

function useListenerIsAuth(){
    return useSelector((state) => state.user.isAuth);
}

function useListenerIsLoginStatus(){
    return useSelector((state) => state.user.isLoginStatus);
}

function useListenerIsRegistrationStatus(){
    return useSelector((state) => state.user.isRegistrationStatus);
}

export {
    buildProvider,
    useLogin,
    useRegistration,
    useLogout,
    useListenerIsAuth,
    useListenerIsLoginStatus,
    useListenerIsRegistrationStatus
}