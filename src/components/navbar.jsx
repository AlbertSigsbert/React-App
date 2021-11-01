import React from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        AM ReactSandbox
      </a>
      <button type="button" className="btn btn-primary">
        Counters <span className="badge badge-light">{totalCounters}</span>
      </button>
    </nav>
  );
};

export default Navbar;
