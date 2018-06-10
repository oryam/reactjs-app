import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './Header.css';

function Header(props) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Event organizer</h1>

      <Link to="/event">Events</Link>
      <Link to="/event/add">Add event</Link>
    </header>
  );
}

export default Header;
