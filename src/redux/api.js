import store from "./store"
import { Provider as ReduxProvider, useDispatch, useSelector } from 'react-redux';
import { auth } from "./user/actions";

function buildProvider(){
    return (props) => {
        return (
            <ReduxProvider store = {store}>
                {props.children}
            </ReduxProvider>
        )
    }
}

function useIsAuth(){
    return useSelector((state) => state.user.isAuth);
}

function useAuth(){
    const dispatch = useDispatch();
    return (login, password) => dispatch(auth(login, password));
}

export {
    buildProvider,
    useAuth,
    useIsAuth
}