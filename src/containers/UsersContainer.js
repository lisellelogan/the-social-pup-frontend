import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from '../components/Users';
import { fetchUsers } from '../actions/UserActions';

class UsersContainer extends Component {

    componentDidMount(){
        this.props.fetchUsers()
    }

    render(){
        return(
            <div>
                <h2>Users Container</h2>
                <Users users={this.props.users} currentUser={this.props.currentUser} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.loggedIn.currentUser.data.attributes,
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);