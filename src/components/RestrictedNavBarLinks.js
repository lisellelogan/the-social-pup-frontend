import React from 'react';
import { NavLink } from 'react-router-dom';

const RestrictedNavBarLinks = () => {
    return(
    <div>
        <NavLink 
            to="/users"
            activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}
            >Find Friends
        </NavLink><br/>

        <NavLink to="/logout"
            activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}
            >Logout
        </NavLink>
    </div>
    )
}

export default RestrictedNavBarLinks;