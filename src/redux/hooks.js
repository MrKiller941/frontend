import { useDispatch, useSelector } from "react-redux";
import { logOut, logIn } from "./user/creators";

export function useAuthUser() {
    const dispatch = useDispatch();
    const signIn = (isAuth, login, password) => {
        const userInfo = {
            isAuth: isAuth,
            login: login,
            password: password
        };
        dispatch(logIn(userInfo));
    };

    const signOut = () => {
        localStorage.clear();
        dispatch(logOut())
    };

    return { signIn, signOut };
}

export function useUserInfo() {
    return useSelector(state => state.user);
}