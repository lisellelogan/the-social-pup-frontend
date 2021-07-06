import React from 'react';
import { NavLink } from 'react-router-dom';

const RestrictedNavBarLinks = (props) => {
    return(
    <div className="navBar">
        <NavLink 
            to={`/user/${props.user.id}`}
            activeStyle={{
                fontWeight: "bold"
            }}
            >Profile
        </NavLink><br/>

        <NavLink 
            to="/welcome"
            activeStyle={{
                fontWeight: "bold"
            }}
            >Welcome
        </NavLink><br/>

        <NavLink 
            to="/users"
            activeStyle={{
                fontWeight: "bold"
            }}
            >Find Friends
        </NavLink><br/>

        <NavLink to="/logout"
            activeStyle={{
                fontWeight: "bold"
            }}
            >Logout
        </NavLink>
    </div>
    )
}

export default RestrictedNavBarLinks;