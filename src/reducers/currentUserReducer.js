export default function currentUserReducer(state = {loggedIn: false, currentUser: null}, action) {
    switch (action.type){
        case "SET_CURRENT_USER":
            return {
                loggedIn: true,
                currentUser: action.payload,
                friends: action.payload.data.attributes.friends
            }
        case "LOGOUT_CURRENT_USER":
            return {
                loggedIn: false,
                currentUser: null,
                friends: []
            }
        case "ADD_FRIEND":
            return {
                ...state,
                friends: [...state.friends, action.payload]
            }
        default:
            return state
    }
}