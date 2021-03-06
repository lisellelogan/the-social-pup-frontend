import React, { Component } from 'react';
import { createUser } from "../actions/UserActions";
import { connect } from 'react-redux';

class SignUpForm extends Component {

    state = {
        email: "",
        password: "",
        pupName: "",
        pupAge: "",
        pupBreed: "",
        pupFullyVaccinated: false,
        pupPersonality: "",
        pupLocation: "",
        ownerName: "",
        picture: ""
    }

    handleOnChange = event => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.createUser(this.state)

        this.setState({
            email: "",
            password: "",
            pupName: "",
            pupAge: "",
            pupBreed: "",
            pupFullyVaccinated: false,
            pupPersonality: "",
            pupLocation: "",
            ownerName: "",
            picture: ""
        })
    }

    render(){
        return(
            <div> 
                <form className="form" onSubmit={this.handleOnSubmit}>
                    <label>Email: </label> <input onChange={this.handleOnChange} type="text" name="email" value={this.state.email} placeholder="email@email.com" required /><br/><br/>
                    <label>Password: </label> <input onChange={this.handleOnChange} type="text" name="password" value={this.state.password} required /><br/><br/>
                    <label>Pup Name: </label> <input onChange={this.handleOnChange} type="text"name="pupName" value={this.state.pupName} required /><br/> <br/>
                    <label>Pup Age: </label> <input onChange={this.handleOnChange} type="string" name="pupAge" value={this.state.pupAge} required /><br/>
                    <i>Please specify months or years old</i><br/><br/>
                    <label>Pup Breed: </label><input onChange={this.handleOnChange} type="text" name="pupBreed" value={this.state.pupBreed} placeholder="ex. Corgi, Beagle, Terrier" required /><br/> <br/>
                    <label>Pup Fully Vaccinated? </label><br/>
                    Yes: <input onChange={this.handleOnChange} type="radio" name="pupFullyVaccinated" value="yes" />
                    No: <input onChange={this.handleOnChange} type="radio" name="pupFullyVaccinated" value="no" /><br /><br/>
                    <label>Pup Personality: </label> <input onChange={this.handleOnChange} type="text" name="pupPersonality" value={this.state.pupPersonality} required /><br/><br/>
                    <label>Pup Location: </label> <input onChange={this.handleOnChange} type="text" name="pupLocation" value={this.state.pupLocation} placeholder="ex. New York, NY" required /><br/><br/>
                    <label>Owner Name: </label> <input onChange={this.handleOnChange} type="text" name="ownerName" value={this.state.ownerName} required /><br/><br/>
                    <label>Profile Picture: </label><input onChange={this.handleOnChange} type="text" name="picture" value={this.state.picture} placeholder="image link" required /><br/><br/>
                    <input type="submit" value="Signup" />
                </form>
            </div>
        )
    }
}


export default connect(null, {createUser})(SignUpForm);