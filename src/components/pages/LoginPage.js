import React, { Component } from "react";

import LoginForm from "../forms/LoginForm";

class LoginPage extends Component {
  state = {};
  render() {
    return (
      <div className="page vh">
        <LoginForm />
      </div>
    );
  }
}

export default LoginPage;
