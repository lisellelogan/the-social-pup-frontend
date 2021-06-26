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
                <label>Email: </label> <input type="text" name="email" value={this.state.email} placeholder="email@email.com"/><br/>
                <label>Password: </label> <input type="text" name="password" value={this.state.password} /><br/>
                <label>Pup Name: </label> <input type="text"name="pupName" value={this.state.pupName} /><br/> 
                <label>Pup Age: </label> <input type="integer" name="pupAge" value={this.state.pupAge} /><br/> 
                <label>Pup Breed: </label><input type="text" name="pupBreed" value={this.state.pupBreed} /><br/> 
                <label>Pup Fully Vaccinated? </label><br/>
                Yes: <input type="radio" name="pupFullyVaccinated" value="Yes" />
                No: <input type="radio" name="pupFullyVaccinated" value="No" />
                <label>Pup Personality: </label> <input type="text" name="pupPersonality" value={this.state.pupPersonality} /><br/>
                <label>Profile Picture: </label><input type="text" name="picture" value={this.state.picture} placeholder="image link" />
            </form>
        )
    }
}

export default SignUpForm;