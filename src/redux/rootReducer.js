import { combineReducers } from "redux";
import reducerUser from "./user/reducer";
import { LOGOUT_USER } from "./user/actions";

const rootReducer = combineReducers({
    user: reducerUser,
})
export default rootReducer;