import React, { Component } from 'react';
import LandingPageContainer from './containers/LandingPageContainer';
// import Welcome from './components/Welcome';
// import UsersContainer from './containers/UsersContainer';
// import Logout from './components/Logout';
// import { Switch, Route } from 'react-router-dom';
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

const mapStateToProps = state => ({loggedIn: state.loggedIn })

export default connect(mapStateToProps)(App);

// <>
      {/* <Switch> */}
        {/* <Route path="/welcome" exact component={Welcome} />
        <Route path="/users" exact component={UsersContainer} />
        <Route path="/logout" exact component={Logout} /> */}
        {/* <Route path ="/" component={LandingPageContainer} />
      </Switch> */}
      // </>