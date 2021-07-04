import React from 'react';
import { AddFriend } from '../actions/CurrentUserActions';
import {connect } from 'react-redux';


const User = (props) => {

    const user = props.user.attributes

    const friend = props.currentUser.friends.filter(friend => props.user.attributes.id === friend.id)

    const handleOnClick = event => {
        //figure out filter option
        if (event.target.innerText === "Love" && friend === []) {
            props.AddFriend(props.currentUser.id, props.user.attributes.id)
        } else {
            alert("You're already friends!")
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

const mapStateToProps = state => {
    return {
        currentUser: state.loggedIn.currentUser.data.attributes
    }
}

export default connect(mapStateToProps, {AddFriend})(User);