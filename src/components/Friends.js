import React from 'react';
import Friend from './Friend';

const Friends = (props) => {
    const friends = props.friends.map(friend => <Friend key={friend.id} friend={friend} />)

    return (
        <ul>
            {friends}
        </ul>
    )
}

export default Friends;