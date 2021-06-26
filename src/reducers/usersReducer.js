export default function usersReducer(state={logged_in: false, users: [], friends: []}, action) {
    switch(action.type){
        case "GOT_USERS":
            return {
                ...state,
                logged_in: true,
                users: action.payload,
                friends: []
            }
        default:
            return state
    }
}

