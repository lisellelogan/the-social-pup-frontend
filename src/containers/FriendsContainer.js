import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/UserActions';

class FriendsContainer extends Component {
    render(){
        return (
            <div>We're in friends container!</div>
        )
    }
}

export default connect()(FriendsContainer);