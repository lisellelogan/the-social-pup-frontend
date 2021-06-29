import React, { Component } from 'react';

//what do i want to do?
// find or create by user email
// if successful change state to logged_in: true
    // connect to the store using { connect }
// else state logged_in: false

class LoginForm extends Component {
    render(){
        return(
            <form>
                <label>Email: </label><input type="text" name="email" /><br/>
                <label>Password: </label><input type="text" name="password" /><br/>
                <input type="submit" value="Login" />
            </form>
        )
    }
}

export default LoginForm;