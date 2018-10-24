import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback
} from "reactstrap";
import { Link } from "react-router-dom";
import { isEmail } from "validator";
import LoadingState from "../states/LoadingState";

class LoginForm extends React.Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    errors: {},
    loading: false
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { data } = this.state;
    const errors = this.validate(data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  validate = data => {
    const errors = {};

    if (!data.email) errors.email = "Email should not be empty";
    if (!isEmail(data.email)) errors.email = "Email must be a valid email";
    if (!data.password) errors.password = "Password should not be empty";

    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    const message = "Loading..";
    return (
      <div>
        <h1 className="mb20">Login to your account</h1>
        {loading && <LoadingState message={message} />}
        <Form onSubmit={this.onSubmit}>
          {errors.message && (
            <div className="alert alert-danger">{errors.message}</div>
          )}
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Your email address"
              name="email"
              value={data.email}
              onChange={this.onChange}
              invalid={!!errors.email}
            />
            <FormFeedback>{errors.email}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={data.password}
              onChange={this.onChange}
              invalid={!!errors.password}
            />
            <FormFeedback>{errors.password}</FormFeedback>
          </FormGroup>
          <div className="m10 float-right">
            <Link style={{ color: "#dc3545" }} to="/forgot-password">
              Forgot password?
            </Link>
          </div>
          <Button block color="danger">
            Login
          </Button>
          <div className="mt20 text-center">
            <p>Want to create an account with email/phone number? </p>
            <Link style={{ color: "#dc3545" }} to="/register">
              Sign up
            </Link>
          </div>
        </Form>
      </div>
    );
  }
}

export default LoginForm;
