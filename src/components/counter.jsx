import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 2,
  };

  styles = {
    margin: "20px",
  };
  render() {
    return (
      <React.Fragment>
        <span className={this.getSpanClasses()}>{this.formatCount()}</span>
        <button style={this.styles} className="btn btn-secondary">
          Increment
        </button>
      </React.Fragment>
    );
  }

  getSpanClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
