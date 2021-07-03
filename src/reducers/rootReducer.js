import { combineReducers } from "redux";
import currentUserReducer from "./currentUserReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
    users: usersReducer,
    loggedIn: currentUserReducer
})

export default rootReducer