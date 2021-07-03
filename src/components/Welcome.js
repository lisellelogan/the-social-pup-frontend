import React from 'react';

const Welcome = (props) => {
    return(
        <div>
            <h1>Hi {props.currentUser.pup_name},</h1>
            <p>Welcome to The Social Pup club!</p>
        </div>
    )
}

export default Welcome;