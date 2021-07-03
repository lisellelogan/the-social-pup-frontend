import React, { Component } from 'react';
import Friends from './Friends';
import { connect } from 'react-redux';

class FriendsContainer extends Component {

    render(){
        return (
            <div>
                <h2>FriendsContainer</h2>
                <Friends friends={this.props.friends} />
            </div>
        )
    }
}

const mapStateProps = (state) => {
    return {
        friends: state.loggedIn.currentUser.data.attributes.friends
    }
}

export default connect(mapStateProps)(FriendsContainer);