export const CurrentUserActions = (user) => ({type: "SET_CURRENT_USER", payload: user})

export const Login = (userInput) => {
    return (dispatch) => {
        console.log(userInput)
    }
}