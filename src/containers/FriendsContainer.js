import React, { Component } from 'react';
import Friends from '../components/Friends';
import { fetchFriends } from '../actions/FriendsActions';
import { connect } from 'react-redux';

class FriendsContainer extends Component {

    componentDidMount(){
        this.props.fetchFriends()
    }

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
        currentUser: state.loggedIn.currentUser.data.attributes,
        friends: state.loggedIn.currentUser.data.attributes.friends
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFriends: () => dispatch(fetchFriends())
    }
}

export default connect(mapStateProps, mapDispatchToProps)(FriendsContainer);