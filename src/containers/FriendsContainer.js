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

export default connect()(FriendsContainer);