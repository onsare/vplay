import React, { Component } from "react";
import { Container } from "reactstrap";

import Navigation from "./partials/Navbar";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navigation />
      </div>
    );
  }
}

export default Header;
