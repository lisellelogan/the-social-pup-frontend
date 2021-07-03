export const loginUser = (user) => ({type: "SET_CURRENT_USER", payload: user})

export const Login = (userInput) => {
    return (dispatch) => {
        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(userInput)
        }
        fetch("http://127.0.0.1:3001/login", configObj)
        .then(resp => resp.json())
        .then(user => {
             if (user.error) {
                 alert(user.error)
             } else {
                 dispatch(loginUser(user))
             }
        })
    }
}

export const logoutUser = () => ({type: "LOGOUT_CURRENT_USER"})

export const LogoutCurrentUser = () => {
    return (dispatch) => {
        dispatch(logoutUser())
        
        const configObj = {
            method: 'DELETE',
            "Content-Type": "application/json",
            Accept: "application/json"
        }

        fetch("http://127.0.0.1:3001/logout", configObj)
        .then(resp => resp.json())
        .then(data => {
            alert(data.message)
        })
    }
}

export const addedFriend = (friend) => ({type: "ADD_FRIEND", payload: friend})

export const AddFriend = (friend) => {
    return (dispatch) => {
        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(friend)
        }

        fetch("http://127.0.0.1:3001/friendships", configObj)
        .then(resp => resp.json())
        .then(data => {
            debugger
        })
    }
}