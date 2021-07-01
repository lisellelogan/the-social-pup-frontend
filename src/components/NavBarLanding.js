import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarLanding = () => {
    return(
    <div>
        <NavLink 
            to="/login"
            activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}
            >Login
        </NavLink><br/>

        <NavLink to="/signup"
            activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}
            >Signup
        </NavLink>
    </div>
    )
}

export default NavBarLanding;