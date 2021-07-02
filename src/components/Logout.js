import React from 'react';
import { connect } from 'react-redux';
import { LogoutCurrentUser } from '../actions/CurrentUserActions';

const Logout = (props) => {
    return (
        <form onSubmit={props.LogoutCurrentUser()}>
            <input type="submit" value="Logout" />
        </form>
    )
}

export default connect(null, { LogoutCurrentUser })(Logout);