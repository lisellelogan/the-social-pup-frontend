import React from 'react';
import { NavLink } from 'react-router-dom';

const RestrictedNavBarLinks = () => {
    return(
    <div>
        <NavLink 
            to="/welcome"
            activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}
            >Welcome
        </NavLink><br/>

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