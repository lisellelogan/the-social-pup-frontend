const url = "http://127.0.0.1:3001/users"

const getFriends = (friends) => ({type: "GOT_FRIENDS", payload: friends})

export const fetchFriends = () => {
    return (dispatch) => {
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            // debugger
            const users = data.data
        })
    }
}