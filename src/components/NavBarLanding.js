import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarLanding = () => {
    return(
    <div className="buttonDiv">
        <NavLink className="loginButton"
            to="/login"
            activeStyle={{
                fontWeight: "bold",
                color: "#F0DDA8",
            }}
            >Login
        </NavLink><br/><br/>

        <NavLink className="signupButton"
            to="/signup"
            activeStyle={{
                fontWeight: "bold",
                color: "#F0DDA8"
            }}
            >Signup
        </NavLink><br/><br/>
    </div>
    )
}

export default NavBarLanding;