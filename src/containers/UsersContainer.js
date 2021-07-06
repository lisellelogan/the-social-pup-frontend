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
                <h2>Find Friends!</h2>
                <Users users={this.props.users} currentUser={this.props.currentUser}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
        currentUser: state.loggedIn.currentUser.data.attributes
    }
}

export default connect(mapStateToProps, {fetchUsers})(UsersContainer);