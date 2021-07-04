import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MessageUser from './MessageUser';

const User = (props) => {
    const user = props.user

    const handleOnClick = () => {
        // route to message and "submit form"
       

    }

    return(
        <div>
            <li id={user.id}>
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
            <button onClick={handleOnClick}> Email {user.pup_name} </button><br/><br/>
        </div>
        
    )
}

export default User;