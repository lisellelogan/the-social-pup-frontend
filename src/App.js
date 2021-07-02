import React, { Component } from 'react';
import LandingPageContainer from './containers/LandingPageContainer';
import RestrictedNavBar from './components/RestrictedNavBar';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render(){
    return(
      this.props.loggedIn ? <RestrictedNavBar /> : <LandingPageContainer />
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn.loggedIn
  }
}

export default connect(mapStateToProps)(App)
