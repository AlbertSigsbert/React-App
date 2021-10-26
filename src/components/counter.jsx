import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 2,
    tags: ["tag1", "tag2", "tag3"],
    names: ["John", "James", "Jackson"],
  };

  styles = {
    margin: "20px",
  };

  handleIncrement = () => {
     this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.getSpanClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          style={this.styles}
          className="btn btn-secondary"
        >
          Increment
        </button>

        {this.renderTags()}

        <ul>
          {this.state.names.length === 0 && <p>There re no names!!!</p>}
          {this.state.names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There is no tags!!!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
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
