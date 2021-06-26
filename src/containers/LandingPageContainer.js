import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import { Switch, Route } from 'react-router-dom';
import LogInForm from '../components/LogInForm';
import SignUpForm from '../components/SignUpForm';

class LandingPageContainer extends Component {
    render(){
        return(
            <div>
                <h1>Welcome to The Social Pup! We are in the landing page container!</h1>
                <h2>Let's be friends!</h2>
                <NavBar />
                <Switch>
                    <Route path="/login" exact component={LogInForm} />
                    <Route path="/signup" exact component={SignUpForm} />
                </Switch>
            </div>
        )
    }
}

export default LandingPageContainer;