import { combineReducers } from "redux";
import friendsReducer from "./friendsReducer";
import loginReducer from "./loginReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
    users: usersReducer,
    loggedIn: loginReducer,
    friends: friendsReducer
})

export default rootReducer