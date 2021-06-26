import React, { Component } from 'react';

class SignUpForm extends Component {

    state = {
        email: "",
        password: "",
        pup_name: "",
        pup_age: "",
        pup_breed: "",
        pup_fully_vaccinated: false,
        pup_personality: "",
        owner_name: "",
        picture: ""
    }

    render(){
        return(
            <form>
                <input type="text" name="email" value={this.state.email}/>
                <input type="text" name="password" value={this.state.password} />
                <input type="text"name="pup_name" value{this} />
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
            </form>
        )
    }
}

export default SignUpForm;