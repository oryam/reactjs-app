import React, { Component } from 'react';

class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.refresh = this.refresh.bind(this);
  }

  refresh() {
    this.setState({ randomValue: Math.random() });
  }

  render() {
    return (
      <div>
        <button onClick={this.refresh}>dcxcdxs</button>
        <div>{this.state.randomValue}</div>
      </div>
    );
  }
}

export default Random;
