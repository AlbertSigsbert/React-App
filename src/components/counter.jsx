import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Counter extends React.Component {
  styles = {
    margin: "10px",
  };

  render() {
    return (
      <div className="my-4">
        <div className="row">
          <div className="col-1 align-self-center">
            <span className={this.getSpanClasses()}>{this.formatCount()}</span>
          </div>
          <div className="col-11">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              style={this.styles}
              className="btn btn-secondary"
            >
             <FontAwesomeIcon icon="plus" />
            </button>

            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              style={this.styles}
              className={this.getDecrementBtnClasses()}
            >
             <FontAwesomeIcon icon="minus" />
            </button>

            <button
              style={this.styles}
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger"
            >
              <FontAwesomeIcon icon="times" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  getDecrementBtnClasses() {
    let classes = "btn btn-secondary ";
    classes += this.props.counter.value === 0 ? "disabled" : "";
    return classes;
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
