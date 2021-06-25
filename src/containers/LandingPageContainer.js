import React, { Component } from 'react';
import NavBarLanding from '../components/NavBarLanding';

class LandingPageContainer extends Component {
    render(){
        return(
            <div>
                <h1>Welcome to The Social Pup! We are in the landing page container!</h1>
                <NavBarLanding />
            </div>
        )
    }
}

export default LandingPageContainer;