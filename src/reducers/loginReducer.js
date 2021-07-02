export default function loginReducer(state = {loggedIn: false, currentUser: null}, action) {
    switch (action.type){
        case "SET_CURRENT_USER":
            return {
                loggedIn: true,
                currentUser: action.payload
            }
        case "LOGOUT_CURRENT_USER":
            return {
                loggedIn: false,
                currentUser: null
            }
        default:
            return state
    }
}