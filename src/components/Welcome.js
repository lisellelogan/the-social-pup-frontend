import React from 'react';
import { connect } from 'react-redux';

const Welcome = (props) => {
    return(
        <div className="welcome">
            <h1>Hi {props.currentUser.pup_name},</h1>
            <p>Welcome to The Social Pup club!</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.loggedIn.currentUser.attributes
    }
}

export default connect(mapStateToProps)(Welcome);