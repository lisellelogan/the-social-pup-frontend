import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

const NavBarLanding = () => {
    return(
    <div>
        <h1>Welcome to The Social Pup in App</h1>
        <Link to="/users">All Dogs</Link>

        <Switch>
            <Route path="/users">
                <p>Here are all the users</p>
            </Route>
        </Switch>
    </div>
    )
}

export default NavBarLanding;