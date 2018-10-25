import React, { Component } from "react";

class Footer extends Component {
  state = {
    year: new Date().getFullYear()
  };
  render() {
    return (
      <div className="footer">
        <h2>Credits</h2>
        <div className="small mb20 mt10">
          <p>
            Photo by Hanny Naibaho on Unsplash <br />
            Photo by NESA by Makers on Unsplash
            <br />
            Photo by rawpixel on Unsplash
          </p>
        </div>
        vPlay &copy; {this.state.year} SmartDuka Client. All rights reserved.
      </div>
    );
  }
}

export default Footer;
