import React from 'react';
import { Link } from 'react-router-dom';

import route from './route';
import logo from './logo.svg';
import './Header.css';
import SignOutButton from './login/SignOut';
import AuthUserContext from './AuthUserContext';

const HeaderAuthenticated = () => (
  <div>
    <Link to={route.event.list}>Events</Link>
    <Link to={route.event.add}>Add event</Link>
    <SignOutButton />
  </div>
);

const HeaderNotAuthenticated = () => (
  <Link to={route.login.signin}>Sign In</Link>
);

export const Header = ({ user }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Event organizer</h1>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <HeaderAuthenticated /> : <HeaderNotAuthenticated />
      }
    </AuthUserContext.Consumer>
  </header>
);

export default Header;
