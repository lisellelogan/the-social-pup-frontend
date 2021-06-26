import React from 'react';

const User = (props) => {
    const user = props.user.attributes
    console.log(user)
    return(
        <li>
            <img src={user.picture} alt={user.picture}/>
            Email: {user.email}<br/>
            Pup Name: {user.pup_name}<br/>
            Pup Age: {user.pup_age}<br/>
            Pup Breed: {user.pup_breed}<br/>
            Pup Fully Vaccinated: {user.pup_fully_vaccinated ? "Yes" : "No"}<br/>
            Pup Personality: {user.pup_personality}<br/>
            Owner Name: {user.owner_name}<br/>
        </li>
    )
}

export default User;