import React from 'react';

const User = (props) => {
    const user = props.user.attributes

    const handleOnClick = event => {
        if (event.target.innerText) {
            //add to friends list
        }
    }

    return(
        <div>
            <li>
                <img src={user.picture} alt={user.picture}/><br/>
                Pup Name: {user.pup_name}<br/>
                Pup Age: {user.pup_age}<br/>
                Pup Breed: {user.pup_breed}<br/>
                Pup Fully Vaccinated: {user.pup_fully_vaccinated ? "Yes" : "No"}<br/>
                Pup Personality: {user.pup_personality}<br/>
                Pup Location: {user.pup_location}<br/>
                Owner Name: {user.owner_name}<br/>
                Email: {user.email}<br/><br/>
            </li>
            <button onClick={handleOnClick}>Love</button>  <button onClick={handleOnClick}>Nope</button><br/><br/>
        </div>
        
    )
}

export default User;