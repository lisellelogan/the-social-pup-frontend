import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Users from './Users';
import Logout from './Logout';
import RestrictedNavBarLinks from './RestrictedNavBarLinks';

const RestrictedNavBar = () => {
    return(
        <>
            <RestrictedNavBarLinks />
            <Switch>
                <Route exact path="/users" component={Users} />
                <Route exact path="/logout" component={Logout} />
            </Switch>
        </>
    )
}

export default RestrictedNavBar;