import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/Login';

class LandingPageContainer extends Component {
    render(){
        return(
            <div>
                <h1>Welcome to The Social Pup! We are in the landing page container!</h1>
                <h2>Let's be friends!</h2>
                <NavBar />

                <Switch>
                    <Route path="/login" exact component={Login}>
                    </Route>

                    <Route path="/signup">
                        <p>Signup Form</p>
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default LandingPageContainer;