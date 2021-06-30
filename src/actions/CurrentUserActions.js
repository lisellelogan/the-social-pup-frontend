export const CurrentUserActions = (user) => ({type: "SET_CURRENT_USER", payload: user})

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
    }
}