import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions/FriendsActions';

class FriendsContainer extends Component {

    componentDidMount() {
        this.props.fetchFriends()
    }

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