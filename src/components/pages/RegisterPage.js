import React, { Component } from "react";

import RegisterForm from "../forms/RegisterForm";

class RegisterPage extends Component {
  state = {};
  render() {
    return (
      <div className="page vh">
        <RegisterForm />
      </div>
    );
  }
}

export default RegisterPage;
