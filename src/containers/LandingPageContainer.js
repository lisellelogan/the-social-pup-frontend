import React, { Component } from 'react';
import NavBarLanding from '../components/NavBarLanding';
import { Switch, Route } from 'react-router-dom';
import LogInForm from '../components/LogInForm';
import SignUpForm from '../components/SignUpForm';


class LandingPageContainer extends Component {
    render(){
        return(
            <div className="landingPage">
                <h1 className="theSocialPup">The Social Pup </h1>
                <h2 className="makeFriends">Let's make some friends!</h2>
                <NavBarLanding />
                    <Switch>
                        <Route path="/login" exact component={LogInForm} />
                        <Route path="/signup" exact component={SignUpForm} />
                    </Switch>
            </div>
        )
    }
}

export default LandingPageContainer;