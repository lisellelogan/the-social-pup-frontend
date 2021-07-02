import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UsersContainer from '../containers/UsersContainer';
import Logout from './Logout';
import Welcome from './Welcome';
import ProfilePage from './ProfilePage';
import RestrictedNavBarLinks from './RestrictedNavBarLinks';

const RestrictedNavBar = () => {
    return(
        <>
            <RestrictedNavBarLinks />
            <Switch>
                <Route path="/users/profile" exact component={ProfilePage} />
                <Route path="/welcome" exact component={Welcome} />
                <Route path="/users" exact component={UsersContainer} />
                <Route path="/logout" exact component={Logout} />
            </Switch>
        </>
    )
}

export default RestrictedNavBar;