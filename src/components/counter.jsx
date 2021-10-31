import React from "react";

class Counter extends React.Component {
  styles = {
    margin: "20px",
  };

  render() {
    return (
      <div className="my-4">
        <span className={this.getSpanClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={this.styles}
          className="btn btn-secondary"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }

  getSpanClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
