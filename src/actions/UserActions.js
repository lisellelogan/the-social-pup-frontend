const url = "http://127.0.0.1:3001/users"

export const setUsers = (users) => dispatch({type: "GOT_USERS", payload: users})

export const fetchUsers = () => {
    return (dispatch) => {
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            const users = data.data
            dispatch(setUsers(users))
        })
    }
}