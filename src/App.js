import React, { Component } from 'react';
import LandingPageContainer from './containers/LandingPageContainer';
import UsersContainer from './containers/UsersContainer';
import './App.css';


export default class App extends Component {
  render(){
    return(
      <>
        <LandingPageContainer />
        <UsersContainer />
      </>
    )
  }
}
