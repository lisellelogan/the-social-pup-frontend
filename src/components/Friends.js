import React from 'react';

const Friends = (props) => {
    const friends = props.friends.map(friend => <Friend />)
}

export default Friends;