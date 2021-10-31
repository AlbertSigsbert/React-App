import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          AM ReactSandbox
        </a>
        <button type="button" className="btn btn-primary">
          Counters{" "}
          <span className="badge badge-light">{this.props.totalCounters}</span>
        </button>
      </nav>
    );
  }
}

export default Navbar;
