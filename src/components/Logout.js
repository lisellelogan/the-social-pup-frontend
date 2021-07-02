import React from 'react';
import { connect } from 'react-redux';
import { LogoutCurrentUser } from '../actions/CurrentUserActions';

const Logout = () => {
    return (
        <div>
            Logout !!
        </div>
    )
}

export default connect(null, { LogoutCurrentUser })(Logout);