import React from 'react';
import User from './User';
import { connect } from 'react-redux';

const Users = (props) => {
    // only want to pass users that are not in friends list nad not a current user
    const friends = props.friends

    const users = props.users.map(userData => userData.attributes)
    
    const filteredUsers = (friends, users) => {

        let findFriends = [...friends, ...users]

        debugger
        // return friends.map(function(friend) {
        //     return users.reduce(function(acc, val){
        //         friend.id !== val.attributes.id && acc.friend++;
        //         debugger
        //         return acc;
        //     }, {friend})
        // });
    }

    filteredUsers(friends, users)


    // const users = props.users.map(
    //     user => <User key={user.id} user={user} />
    // 

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