import React, { Component } from 'react';

import { dsEventListOn, dsEventListOff } from './EventDS';

export class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }

  componentDidMount() {
    this.list();
  }

  componentWillUnmount() {
    dsEventListOff();
  }

  list() {
    dsEventListOn(snapshot => {
      const events = [];
      snapshot.forEach(row => {
        const value = row.val();
        value.id = row.key;
        events.push(value);
      });

      this.setState({ events });
    });
  }

  render() {
    return (
      <div>
        <h2>Event List</h2>
        <ul>
          {this.state.events.map(ev => {
            return (
              <li key={ev.id}>
                {ev.title} {ev.description}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default EventList;
