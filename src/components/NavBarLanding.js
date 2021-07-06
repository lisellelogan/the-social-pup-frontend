import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarLanding = () => {
    return(
    <div className="buttonDiv">
        <NavLink className="loginButton"
            to="/login"
            activeStyle={{
                fontWeight: "bold",
                color: "red",
               
            }}
            >Login
        </NavLink><br/><br/>

        <NavLink className="signupButton"
            to="/signup"
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