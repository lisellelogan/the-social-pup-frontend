import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

const NavBarLanding = () => {
    return(
    <div>
        <Link to="/login">Login</Link><br/>
        <Link to="/signup">Signup</Link>

        <Switch>
            <Route path="/login">
                <p>Login Form</p>
            </Route>

            <Route path="/signup">
                <p>Signup Form</p>
            </Route>
        </Switch>
    </div>
    )
}

export default NavBarLanding;