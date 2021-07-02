import React from 'react';
import { connect } from 'react-redux';
import { LogoutCurrentUser } from '../actions/CurrentUserActions';

const Logout = (props) => {

    return (
        // <form onSubmit={props.LogoutCurrentUser()}>
        //     <input type="submit" value="Logout" />
        // </form>

        <button onClick={() => props.LogoutCurrentUser()} >
            Logout
        </button>
    )
}

export default connect(null, { LogoutCurrentUser })(Logout);