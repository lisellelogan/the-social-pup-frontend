import React, { Component } from 'react';
import { createUser } from "../actions/UserActions";
import { connect } from 'react-redux';

class SignUpForm extends Component {

    state = {
        email: "",
        password: "",
        pupName: "",
        pupAge: 0,
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
        // dispatch action to update store
        this.props.createUser(this.state)
        //clear form
        this.setState({
            email: "",
            password: "",
            pupName: "",
            pupAge: 0,
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
                <form onSubmit={this.handleOnSubmit}>
                    <label>Email: </label> <input onChange={this.handleOnChange} type="text" name="email" value={this.state.email} placeholder="email@email.com"/><br/>
                    <label>Password: </label> <input onChange={this.handleOnChange} type="text" name="password" value={this.state.password} /><br/>
                    <label>Pup Name: </label> <input onChange={this.handleOnChange} type="text"name="pupName" value={this.state.pupName} /><br/> 
                    {/* ask about implementing years old or months old or if i should just change data type to string in backend */}
                    <label>Pup Age: </label> <input onChange={this.handleOnChange} type="number" name="pupAge" value={this.state.pupAge} /><br/> 
                    <label>Pup Breed: </label><input onChange={this.handleOnChange} type="text" name="pupBreed" value={this.state.pupBreed} placeholder="ex. Corgi, Beagle, Terrier" /><br/> 
                    <label>Pup Fully Vaccinated? </label><br/>
                    Yes: <input onChange={this.handleOnChange} type="radio" name="pupFullyVaccinated" value="Yes" />
                    No: <input onChange={this.handleOnChange} type="radio" name="pupFullyVaccinated" value="No" /><br />
                    <label>Pup Personality: </label> <input onChange={this.handleOnChange} type="text" name="pupPersonality" value={this.state.pupPersonality} /><br/>
                    <label>Pup Location: </label> <input onChange={this.handleOnChange} type="text" name="pupLocation" value={this.state.pupLocation} placeholder="ex. New York, NY"/><br/>
                    <label>Owner Name: </label> <input onChange={this.handleOnChange} type="text" name="ownerName" value={this.ownerName} /><br/>
                    <label>Profile Picture: </label><input onChange={this.handleOnChange} type="text" name="picture" value={this.state.picture} placeholder="image link" /><br/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, { createUser })(SignUpForm);