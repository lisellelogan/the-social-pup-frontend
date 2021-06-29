import React, { Component } from 'react';

class LoginForm extends Component {
    render(){
        return(
            <form>
                <label>Email: </label><input type="text" name="email" /><br/>
                <label>Password: </label><input type="text" name="password" />
            </form>
        )
    }
}

export default LoginForm;