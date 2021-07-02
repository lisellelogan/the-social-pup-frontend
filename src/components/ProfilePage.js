import React from 'react';
// import User from './User';
import { connect } from 'react-redux';

const ProfilePage = (props) => {
    //here i want to display user info
        //user component
    //display list of friends
        //make friendsList component
    
    return(
        <div>{props.currentUser.pup_name}</div>
    )
    
}

const mapStateProps = state => {
    return {
        currentUser: state.loggedIn.currentUser
    }
}

export default connect(mapStateProps)(ProfilePage);