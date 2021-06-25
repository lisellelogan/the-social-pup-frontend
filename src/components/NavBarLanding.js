import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import UsersContainer from '../containers/UsersContainer';

const NavBarLanding = () => {
    return(
    <div>
        <h1>Welcome to The Social Pup in App</h1>
        <Link to="/users">All Users</Link>

        <Switch>
            <Route path="/users">
                <UsersContainer />
            </Route>
        </Switch>
    </div>
    )
}

export default NavBarLanding;