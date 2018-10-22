import React, { Component } from "react";

class Footer extends Component {
  state = {
    year: new Date().getFullYear()
  };
  render() {
    return (
      <div className="footer">
        vPlay &copy; {this.state.year}. All rights reserved.
      </div>
    );
  }
}

export default Footer;
