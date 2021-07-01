import React, { Component } from 'react';
import { Login } from '../actions/CurrentUserActions';
import { connect } from 'react-redux';

//what do i want to do?
// find or create by user email
// if successful change state to logged_in: true
    // connect to the store using { connect }
// else state logged_in: false

class LoginForm extends Component {

    state = {
        email: ""
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
        this.props.Login(this.state)
        this.setState({
            email: ""
        })
    }


    render(){
        return(
            <form onSubmit={this.handleOnSubmit}>
                <label>Email: </label><input onChange={this.handleOnChange} type="text" name="email" value={this.state.email} /><br/>
                <input type="submit" value="Login" />
            </form>
        )
    }
}

export default connect(null, {Login})(LoginForm);