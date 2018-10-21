import React, { Component } from "react";

import Navigation from "./partials/Navbar";
import Banner from "./partials/Banner";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navigation />
        <Banner />
      </div>
    );
  }
}

export default Header;
