export default function userReducer(state = false, action) {
    switch (action.type){
        case "SET_CURRENT_USER":
            return action.payload
        default:
            return state
    }
}