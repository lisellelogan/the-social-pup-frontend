import React from 'react';
import { connect } from 'react-redux';
import { LogoutCurrentUser } from '../actions/CurrentUserActions';
// import LandingPageContainer from '../containers/LandingPageContainer';

const Logout = ({ LogoutCurrentUser }) => {
    LogoutCurrentUser()
}

export default connect(null, { LogoutCurrentUser })(Logout);