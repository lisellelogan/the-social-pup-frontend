import React, { Component } from 'react';

class SignUpForm extends Component {

    state = {
        email: "",
        password: "",
        pupName: "",
        pupAge: "",
        pupBreed: "",
        pupFullyVaccinated: false,
        pupPersonality: "",
        ownerName: "",
        picture: ""
    }

    render(){
        return(
            <form>
                <label>Email: </label> <input type="text" name="email" value={this.state.email}/><br/>
                <label>Password: </label> <input type="text" name="password" value={this.state.password} /><br/>
                <label>Pup Name: </label> <input type="text"name="pupName" value={this.state.pupName} /><br/> 
                <label>Pup Age: </label> <input type="integer" name="pupAge" value={this.state.pupAge} /><br/> 
                <label>Pup Breed: </label><input type="text" name="pupBreed" value={this.state.pupBreed} /><br/> 
                <label>Pup Fully Vaccinated? </label><br/>
                Yes: <input type="checkbox" name="pupIsFullyVaccinated"/>
                No: <input type="checkbox" name="pupIsNotFullyVaccinated"/>
                <input />
                <input />
            </form>
        )
    }
}

export default SignUpForm;