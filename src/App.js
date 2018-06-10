import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import EventList from './event/EventList';
import EventAdd from './event/EventAdd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          Browse events
        </p>
        <Route exact path="/event" component={EventList} />
        <Route exact path="/event/add" component={EventAdd} />
      </div>
    );
  }
}

export default App;
