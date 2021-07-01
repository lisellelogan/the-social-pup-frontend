export default function loginReducer(state = {loggedIn: false, currentUser: null}, action) {
    switch (action.type){
        case "SET_CURRENT_USER":
            return action.payload
        default:
            return state
    }
}