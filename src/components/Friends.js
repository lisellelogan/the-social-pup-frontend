import React from 'react';
import Friend from './Friend';
import { AddFriend } from '../actions/CurrentUserActions';
import { connect } from 'react-redux';

const Friends = (props) => {
    const friends = props.friends.map(friend => <Friend key={friend.id} friend={friend} />)

    return (
        <ul>
            {friends}
        </ul>
    )
}

const mapStateToProps = state => {
    debugger
}

export default connect(mapStateToProps, {AddFriend})(Friends);