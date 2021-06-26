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
                <Users />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);