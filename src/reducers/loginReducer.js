export default function loginReducer(state = {logged_in: false, current_user: null}, action) {
    switch (action.type){
        case "SET_CURRENT_USER":
            return action.payload
        default:
            return state
    }
}