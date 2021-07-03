import React from 'react';
import User from './User';

const Users = (props) => {
    const users = props.users.map(
        user => <User key={user.id} user={user} />
    )

    return(
        <ul>
           { users }
        </ul>
    )
}

// props.currentUser.id === user.id ? <User key={user.id} user={user} /> : ""

export default Users;