export default function(state = [], action) {
    switch(action.type){
        case "GOT_FRIENDS":
            return action.payload
        default:
            return state
    }
}