import React, { Component } from 'react';
import LandingPageContainer from './containers/LandingPageContainer';
import Welcome from './components/Welcome';
import { Switch, Route } from 'react-router-dom';
import './App.css';


export default class App extends Component {
  render(){
    return(
      <>
      <Switch>
        <Route path="/welcome" exact component={Welcome} />
        <Route path ="/" component={LandingPageContainer} />
      </Switch>
      </>
    )
  }
}
