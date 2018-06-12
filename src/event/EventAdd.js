import React, { Component } from 'react';

import { dsEventAdd } from './EventDS';

export class EventAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      latitude: 48.856614,
      longitude: 2.3522219,
      address: '',
      zipcode: '',
      city: '',
      country: '',
      date: '',
      creator: '',
      private: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    const data = {
      title: this.state.title,
      description: this.state.description,
      address: this.state.address,
      date: this.state.date
    };
    console.log('[event add] saving', data, this.state);
    this.save(data);
    event.preventDefault();
  }

  save(data) {
    const id = Date.now();
    dsEventAdd(id, data);
  }

  render() {
    return (
      <div>
        <h2>Add Event</h2>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="address"
            placeholder="Meeting address"
            onChange={this.handleChange}
          />

          <input
            type="datetime-local"
            name="date"
            placeholder="Event date"
            onChange={this.handleChange}
          />

          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default EventAdd;
