import React from 'react';
import User from './User';

const Users = (props) => {
    const users = props.users.map(user => props.currentUser.id !== user.id ? <User key={user.id} user={user} /> : [])

    return (
        <ul className="friends">
            {users}
        </ul>
    )

}
export default Users;