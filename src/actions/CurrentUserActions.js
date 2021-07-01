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
        .then(data => {
             
            //if login successful, 
                //update logged_in state
                //set current user to logged in user
        })
    }
}