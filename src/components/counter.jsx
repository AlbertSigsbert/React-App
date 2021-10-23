import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 1,
  };

  styles = {
    margin: '20px'
  }
  render() {
    return (
      <React.Fragment>
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button style={this.styles}  className="btn btn-secondary">Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
