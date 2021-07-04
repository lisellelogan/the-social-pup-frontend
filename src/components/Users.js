import React from 'react';
import User from './User';
// import { connect } from 'react-redux';

const Users = (props) => {
    const users = props.users.map(user => <User key={user.id} user={user} />)

    return (
        <ul>
            {users}
        </ul>
    )
}
//     // only want to pass users that are not in friends list nad not a current user
//     const friends = props.friends
//     const users = props.users

//     const filteredUsers = (users, friends) => {

//         let filterUsers = users.filter(user => !friends.some(friend => (
//             friend.id === user.id
//             )
//         ))
//         return filterUsers
//     }

//     const filteredUsersList = filteredUsers(users, friends).map(user => props.currentUser.id !== user.id ? <User key={user.id} user={user} /> : [])

//     return(
//         <ul>
//            {filteredUsersList}
//         </ul>
//     )
// }

// const mapStateToProps = (state) => {
//     return {
//         currentUser: state.loggedIn.currentUser.data.attributes,
//         friends: state.loggedIn.currentUser.data.attributes.friends
//     }
// }

// // props.currentUser.id === user.id ? <User key={user.id} user={user} /> : ""

export default Users;