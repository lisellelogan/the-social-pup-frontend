import React from 'react';
import Friends from './Friends';
import { connect } from 'react-redux';

const ProfilePage = (props) => {
    //display list of friends
        //make friendsList component
    
    return(
        <div>
            <img src={props.currentUser.picture} alt={props.currentUser.picture}/><br/>
            Pup Name: {props.currentUser.pup_name}<br/>
            Pup Age: {props.currentUser.pup_age}<br/>
            Pup Breed: {props.currentUser.pup_breed}<br/>
            Pup Fully Vaccinated: {props.currentUser.pup_fully_vaccinated ? "Yes" : "No"}<br/>
            Pup Personality: {props.currentUser.pup_personality}<br/>
            Pup Location: {props.currentUser.pup_location}<br/>
            Owner Name: {props.currentUser.owner_name}<br/>
            Email: {props.currentUser.email}<br/><br/>

            <Friends friends={props.friends} />
        </div>
    )
    
}

const mapStateProps = state => {
    return {
        currentUser: state.loggedIn.currentUser,
        friends: state.loggedIn.currentUser.data.attributes.friends
    }
}

export default connect(mapStateProps)(ProfilePage);