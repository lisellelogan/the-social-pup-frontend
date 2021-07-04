import React from 'react';
import { RemoveUserFromList } from '../actions/UserActions';
import FriendsContainer from '../containers/FriendsContainer';
import {connect } from 'react-redux';


const User = (props) => {
    const user = props.user[0]

    const friend = props.currentUser.friends.filter(friend => props.user.id === friend.id)

    const handleOnClick = event => {
        if (event.target.innerText === "Love" && friend.length === 0) {
            <FriendsContainer addFriend={props.user.id}/>
            // (props.AddFriend(props.currentUser.id, props.user.id) &&
            props.RemoveUserFromList(props.user)
        } else {
            alert("You're already friends!")
        }
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
            <button onClick={handleOnClick}>Love</button>  <button onClick={handleOnClick}>Nope</button><br/><br/>
        </div>
        
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.loggedIn.currentUser.data.attributes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // AddFriend: (currentUser, user) => dispatch(AddFriend(currentUser, user)),
        RemoveUserFromList: (user) => dispatch(RemoveUserFromList(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);