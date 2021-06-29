import React, { Component } from 'react';

class LoginForm extends Component {
    render(){
        return(
            <form>
                <input type="text" name="email" />
                <input type="text" name="password" />
            </form>
        )
    }
}

export default LoginForm;