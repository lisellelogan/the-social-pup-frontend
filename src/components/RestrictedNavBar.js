import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UsersContainer from '../containers/UsersContainer';
import Logout from './Logout';
import Welcome from './Welcome';
import ProfilePage from './ProfilePage';
import RestrictedNavBarLinks from './RestrictedNavBarLinks';
import { connect } from 'react-redux';

const RestrictedNavBar = (props) => {
    return(
        <>
            <RestrictedNavBarLinks user={props.currentUser} />
            <Switch>
                <Route path="/user/:id" exact component={ProfilePage} />
                <Route exact path="/welcome">
                    <Welcome currentUser={props.currentUser}/>
                </Route>
                <Route path="/users" exact component={UsersContainer} />
                <Route path="/logout" exact component={Logout} />
            </Switch>
        </>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.loggedIn.currentUser
    }
}

export default connect(mapStateToProps)(RestrictedNavBar);