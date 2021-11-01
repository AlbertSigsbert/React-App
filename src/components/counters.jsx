import React from "react";
import Counter from "./counter";
class Counters extends React.Component {
  render() {
    const { onReset, counters, onIncrement, onDelete } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm mt-4">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
