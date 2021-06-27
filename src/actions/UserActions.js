const url = "http://127.0.0.1:3001/users"

const setUsers = (users) => ({type: "GOT_USERS", payload: users})

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

export const createUser = (user) => {
    return (dispatch) => {
        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(user)
        }

        fetch(url, configObj)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)

        })
    }
}