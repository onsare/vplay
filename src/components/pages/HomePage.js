import React, { Component } from "react";

import Banner from "../partials/Banner";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Banner />
        <div className="banner-message">
          <h1>Live. Laugh. Love.</h1>
        </div>
      </div>
    );
  }
}

export default HomePage;
