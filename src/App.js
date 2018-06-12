import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import route from './route';
import Header from './Header';
import SignUpPage from './login/SignUp';
import SignInPage from './login/SignIn';
import PasswordForgetPage from './login/PasswordForget';
import EventList from './event/EventList';
import EventAdd from './event/EventAdd';

import withAuthentication from './withAuthentication';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">Browse events</p>
        <Route
          exact
          path={route.login.signup}
          component={() => <SignUpPage />}
        />
        <Route
          exact
          path={route.login.signin}
          component={() => <SignInPage />}
        />
        <Route
          exact
          path={route.login.passforget}
          component={() => <PasswordForgetPage />}
        />
        <Route exact path={route.event.list} component={EventList} />
        <Route exact path={route.event.add} component={EventAdd} />
      </div>
    );
  }
}

export default withAuthentication(App);
