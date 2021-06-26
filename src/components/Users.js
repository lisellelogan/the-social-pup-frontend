import React from 'react';
import User from './User';

const Users = (props) => {
    const users = props.users.map(
        user => <User key={user.id} user={user} />
    )
    return(
        <ul>
            {users}
        </ul>
    )
}

export default Users