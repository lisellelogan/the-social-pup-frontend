import React from 'react';
import User from './User';
import { connect } from 'react-redux';

const Users = (props) => {
    // only want to pass users that are not in friends list nad not a current user
    const friends = props.friends

    const users = props.users
    
    const filteredUsers = (friends, users) => {
        const findFriends = [];

        friends.forEach(friend => users.forEach(user => {
            if (friend.id !== user.id){
                findFriends.push(friend)
            }
        }))
        return findFriends
    }

    debugger

    // const users = props.users.map(
    //     user => <User key={user.id} user={user} />
    // )

    return(
        <ul>
           { filteredUsers(friends, users) }
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