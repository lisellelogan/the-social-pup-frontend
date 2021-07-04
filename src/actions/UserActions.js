const url = "http://127.0.0.1:3001/users"

const setUsers = (users) => ({type: "GOT_USERS", payload: users})

export const fetchUsers = () => {
    return (dispatch) => {
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            const users = data.data.map(usersData => usersData.attributes)
            dispatch(setUsers(users))
        })
    }
}

const addUser = (user) => ({type: "ADDED_USER", payload: user})

export const createUser = (user) => {

    return (dispatch) => {

        const updatedUser = {
            email: user.email,
            password:user.password,
            pup_name: user.pupName,
            pup_age: user.pupAge,
            pup_breed: user.pupBreed,
            pup_fully_vaccinated: (user.pupFullyVaccinated === "yes" ? true : false),
            pup_personality: user.pupPersonality,
            pup_location: user.pupLocation,
            owner_name: user.ownerName,
            picture: user.picture
        }

        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(updatedUser)
        }

        fetch(url, configObj)
        .then(resp => resp.json())
        .then(data => {
            const user = data.data
            dispatch(addUser(user))
        })
    }
}

const RemoveUser = (user) => ({type: "REMOVE_USER", payload: user})

export const RemoveUserFromList = (user) => {
    return (dispatch) => {
        dispatch(RemoveUser(user))
    }
}