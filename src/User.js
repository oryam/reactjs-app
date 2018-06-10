import React, { Component } from 'react';

export class User extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.getUsers();
  }

  getUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }

  render() {
    const users = this.state.users.map(user => (
      <li key={user.id}>{user.name}</li>
    ));
    return (
      <div>
        <ul>{users}</ul>
      </div>
    );
  }
}

export default User;
