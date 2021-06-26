import React, { Component } from 'react';
import LandingPageContainer from './containers/LandingPageContainer';
import UsersContainer from './containers/UsersContainer';
import { Switch, Route } from 'react-router-dom';
import './App.css';


export default class App extends Component {
  render(){
    return(
      <>
      <Switch>
        <Route path ="/">
            <LandingPageContainer />
        </Route>
        <Route path="/users" exact component={UsersContainer} />
      </Switch>
      </>
    )
  }
}
