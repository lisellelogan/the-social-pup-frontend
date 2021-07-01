import React, { Component } from 'react';
import NavBarLanding from '../components/NavBarLanding';
import { Switch, Route, Redirect } from 'react-router-dom';
import LogInForm from '../components/LogInForm';
import SignUpForm from '../components/SignUpForm';
import { connect } from 'react-redux';

class LandingPageContainer extends Component {
    render(){
        return(
            <div>
                <h1>Welcome to The Social Pup! We are in the landing page container!</h1>
                <h2>Let's be friends!</h2>
                <NavBarLanding />
                <Switch>
                    <Route exact path="/login">
                        {this.props.loggedIn === "true" ? <Redirect to="/users" /> : <LogInForm />}
                    </Route>
                    <Route path="/signup" exact component={SignUpForm} >
                    </Route>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps)(LandingPageContainer);