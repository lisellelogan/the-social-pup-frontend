import React from 'react';
import User from './User';
import { connect } from 'react-redux';

const Users = (props) => {
    // only want to pass users that are not in friends list nad not a current user
    const friends = props.friends

    const users = props.users.map(userData => userData.attributes)
    
    const filteredUsers = (users, friends) => {

        let filteredUsersList = users.filter(user => !friends.some(friend => (
            friend.id !== user.id
            )
        ))
        return filteredUsersList
    }

    filteredUsers(users, friends)
    // const users = props.users.map(
    //     user => <User key={user.id} user={user} />
    //
    debugger

    return(
        <ul>
           Users!
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.loggedIn.currentUser.data.attributes,
        friends: state.loggedIn.currentUser.data.attributes.friends
    }
}

// props.currentUser.id === user.id ? <User key={user.id} user={user} /> : ""

export default connect(mapStateToProps)(Users);