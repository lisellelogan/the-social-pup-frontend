import React, { Component } from 'react';
import NavBarLanding from '../components/NavBarLanding';
import { Switch, Route } from 'react-router-dom';
import LogInForm from '../components/LogInForm';
import SignUpForm from '../components/SignUpForm';
import { Button , Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class LandingPageContainer extends Component {
    render(){
        return(
            <div className="landingPage">
                <h1>Welcome to The Social Pup! We are in the landing page container!</h1>
                <h2>Let's be friends!</h2>
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