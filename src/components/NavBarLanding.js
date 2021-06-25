import React from 'react';
import { Link } from 'react-router-dom';

const NavBarLanding = () => {
    return(
    <div>
        <h1>Welcome to The Social Pup in App</h1>
        <Link to="/users">All Dogs</Link>
    </div>
    )
}

export default NavBarLanding;