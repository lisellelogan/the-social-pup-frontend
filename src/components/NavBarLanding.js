import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarLanding = () => {
    return(
    <div className="buttonDiv">
        <NavLink 
            to="/login"
            activeStyle={{
                fontWeight: "bold",
                color: "red",
            }}
            >Login
        </NavLink><br/><br/><br/>

        <NavLink
            to="/signup"
            activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}
            >Signup
        </NavLink><br/><br/><br/>
    </div>
    )
}

export default NavBarLanding;