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
        fetch("https://thesocialpup.netlify.app/login", configObj)
        .then(resp => resp.json())
        .then(user => {
             if (user.error) {
                 alert(user.error)
             } else {
                 dispatch(loginUser(user.data))
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

        fetch("https://thesocialpup.netlify.app/logout", configObj)
        .then(resp => resp.json())
        .then(data => {
            alert(data.message)
        })
    }
}
