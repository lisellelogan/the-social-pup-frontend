export default function usersReducer(state = [], action) {
    switch(action.type){
        case "GOT_USERS":
            return action.payload
        case "ADDED_USER":
            return {
                ...state,
                users: action.payload
            }
        case "REMOVE_USER":
            const getUsersAttributes = state.map(user => user.attributes)
            const users = getUsersAttributes.filter(user => user.id !== action.payload.id)
            
            return {
                ...state,
                users
            }
        default:
            return state
    }
}

