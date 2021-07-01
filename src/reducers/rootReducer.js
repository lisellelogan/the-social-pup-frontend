import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
    users: usersReducer,
    loggedIn: loginReducer
})

export default rootReducer