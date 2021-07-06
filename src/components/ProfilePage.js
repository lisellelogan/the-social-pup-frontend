import React from 'react';
import { connect } from 'react-redux';

const ProfilePage = (props) => {
    
    return(
        <div className="profilePage">
            <h1 className="profileName">{props.currentUser.pup_name}'s Profile</h1>
            <div className="profileCard">
                <img className="profileImg" src={props.currentUser.picture} alt={props.currentUser.picture}/><br/>
                <div className="profileDetails">
                    <span>Pup Name: {props.currentUser.pup_name}<br/></span>
                    <span>Pup Age: {props.currentUser.pup_age}<br/></span>
                    <span>Pup Breed: {props.currentUser.pup_breed}<br/></span>
                    <span>Pup Fully Vaccinated: {props.currentUser.pup_fully_vaccinated ? "Yes" : "No"}<br/></span>
                    <span>Pup Personality: {props.currentUser.pup_personality}<br/></span>
                    <span>Pup Location: {props.currentUser.pup_location}<br/></span>
                    <span>Owner Name: {props.currentUser.owner_name}<br/></span>
                    <span>Email: {props.currentUser.email}<br/></span>
                </div>
            </div>
        </div>
    )
    
}

const mapStateProps = state => {
    return {
        currentUser: state.loggedIn.currentUser.attributes
    }
}

export default connect(mapStateProps)(ProfilePage);