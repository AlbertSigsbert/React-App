import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    value: this.props.value,
    // tags: ["tag1", "tag2", "tag3"],
    // names: ["John", "James", "Jackson"],
  };

  styles = {
    margin: '20px',
  };

  handleIncrement = () => {
     this.setState({ count: this.state.value + 1 })
  }

  render() {
    return (
       <div className="my-4">
             <span className={this.getSpanClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          style={this.styles}
          className="btn btn-secondary"
        >
          Increment
        </button>
         
         <button onClick={this.props.onDelete} className="btn btn-danger btn-sm">Delete</button>
       </div>
      
   
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
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
