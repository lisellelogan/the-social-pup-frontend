import { combineReducers } from "redux";
import friendsReducer from "./friendsReducer";
import loginReducer from "./currentUserReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
    users: usersReducer,
    loggedIn: currentUserReducer
})

export default rootReducer