import React from 'react';
import { connect } from 'react-redux';
import { LogoutCurrentUser } from '../actions/CurrentUserActions';
import { useHistory } from 'react-router';

const Logout = (props) => {

    const history = useHistory()

    const handleOnClick = () => {
        history.push('/')
        props.LogoutCurrentUser()
    }

    return (
        <button className="logoutButton" onClick={handleOnClick} >
            Are You Sure?
        </button>
    )
}

export default connect(null, { LogoutCurrentUser })(Logout);