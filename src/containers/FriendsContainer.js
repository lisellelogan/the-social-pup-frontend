import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/UserActions';

class FriendsContainer extends Component {
    render(){
        return (
            <div>
                <h2>FriendsContainer</h2>
            </div>
        )
    }
}

const mapStateProps = (state) => {
    return {
        friends: state.friends
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFriends: () => dispatch(fetchFriends())
    }
}

export default connect(mapStateProps, mapDispatchToProps)(FriendsContainer);