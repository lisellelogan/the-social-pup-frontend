import React from 'react';
import { connect } from 'react-redux';
import { Logout } from '../actions/CurrentUserActions';

const Logout = () => {
    return (
        <div>
            Logout !!
        </div>
    )
}

export default connect(null, { Logout })(Logout);