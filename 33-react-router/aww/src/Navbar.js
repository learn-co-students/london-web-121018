import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">home</Link>
        </div>
        <div>
          <Link to="/cards">see all cards</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
