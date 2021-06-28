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

    debugger

    if (user.pup_fully_vaccinated.toLowerCase() === "no"){
        return false 
    } else {
        return true
    }

    return (dispatch) => {

        const updatedUser = {
            email: user.email,
            password:user.password,
            pup_name: user.pupName,
            pup_age: user.pupAge,
            pup_breed: user.pupBreed,
            pup_fully_vaccinated: isPupVaccinated(user.pup_fully_vaccinated),
            pupPersonality: user.pupPersonality,
            pupLocation: user.pupLocation,
            ownerName: user.ownerName,
            picture: user.picture
        }

        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(updatedUser)
        }

        fetch(url, configObj)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
    }
}