import React, { Component } from 'react';
import { connect } from 'react-redux';

class UsersContainer extends Component {
    render(){
        return(
            <div>
                <h2>Users Container</h2>
            </div>
        )
    }
}

export default connect()(UsersContainer);