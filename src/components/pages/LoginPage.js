import React, { Component } from "react";

import LoginForm from "../forms/LoginForm";
import Banner from "../partials/Banner";

class LoginPage extends Component {
  state = {};
  render() {
    return (
      <div className=" vh">
        <Banner />
        {/* <LoginForm /> */}
      </div>
    );
  }
}

export default LoginPage;
