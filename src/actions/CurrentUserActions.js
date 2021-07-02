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

export const logoutUser = (user) => ({type: "LOGOUT_CURRENT_USER", payload: user})

export const Logout = (user) => {
    return (dispatch) => {
        console.log(user)
    }
}