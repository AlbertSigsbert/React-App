import React from "react";
import Counter from "./counter";
class Counters extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className="btn btn-primary btn-sm mt-4">
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
