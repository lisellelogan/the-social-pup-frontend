import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UsersContainer from '../containers/UsersContainer';
import Logout from './Logout';
import RestrictedNavBarLinks from './RestrictedNavBarLinks';

const RestrictedNavBar = () => {
    return(
        <>
            <RestrictedNavBarLinks />
            <Switch>
                <Route exact path="/users" component={UsersContainer} />
                <Route exact path="/logout" component={Logout} />
            </Switch>
        </>
    )
}

export default RestrictedNavBar;