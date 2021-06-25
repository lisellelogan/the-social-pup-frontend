import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

const NavBarLanding = () => {
    return(
    <div>
        <Link to="/login">Login</Link>

        <Switch>
            <Route path="/login">
                <p>Login Form</p>
            </Route>
        </Switch>
    </div>
    )
}

export default NavBarLanding;