import React from 'react';
import { connect } from 'react-redux';

const ProfilePage = (props) => {
    
    return(
        <div>
            <h1>{props.currentUser.pup_name}'s Profile</h1>
            <img src={props.currentUser.picture} alt={props.currentUser.picture}/><br/>
            Pup Name: {props.currentUser.pup_name}<br/>
            Pup Age: {props.currentUser.pup_age}<br/>
            Pup Breed: {props.currentUser.pup_breed}<br/>
            Pup Fully Vaccinated: {props.currentUser.pup_fully_vaccinated ? "Yes" : "No"}<br/>
            Pup Personality: {props.currentUser.pup_personality}<br/>
            Pup Location: {props.currentUser.pup_location}<br/>
            Owner Name: {props.currentUser.owner_name}<br/>
            Email: {props.currentUser.email}<br/><br/>
        </div>
    )
    
}

const mapStateProps = state => {
    return {
        currentUser: state.loggedIn.currentUser.attributes
    }
}

export default connect(mapStateProps)(ProfilePage);