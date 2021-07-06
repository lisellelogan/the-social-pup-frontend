import React from 'react';

const User = (props) => {
    const user = props.user

    const handleOnClick = event => {
        if (event.target.innerText !== "pending") {
            event.target.innerText = "pending"
            alert("Email Request Sent!")
        }
    }

    return(
        <div>
            <li id={user.id}>
                <img className="friendImg" src={user.picture} alt={user.picture}/><br/>
                <div className="friendDetails">
                    Pup Name: {user.pup_name}<br/>
                    Pup Age: {user.pup_age}<br/>
                    Pup Breed: {user.pup_breed}<br/>
                    Pup Fully Vaccinated: {user.pup_fully_vaccinated ? "Yes" : "No"}<br/>
                    Pup Personality: {user.pup_personality}<br/>
                    Pup Location: {user.pup_location}<br/>
                    Owner Name: {user.owner_name}<br/>
                    Email: {user.email}<br/>
                </div>
            </li>
           <button id="email-button" onClick={handleOnClick}>Email {user.pup_name}</button><br/><br/>
        </div> 
    )
}

export default User;