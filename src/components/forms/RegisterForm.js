import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  FormFeedback
} from "reactstrap";

import LoadingState from "../states/LoadingState";
import { Link } from "react-router-dom";
import { isEmail } from "validator";

class RegisterForm extends React.Component {
  state = {
    data: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      password: "",
      location: ""
    },
    errors: {},
    loading: false,
    checked: false
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };
  onClick = () => {
    this.setState({ checked: !this.state.checked });
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
          this.setState({ errors: err.response.data, loading: false })
        );
    }
  };

  validate = data => {
    const errors = {};

    if (!data.email) errors.email = "This field should not be empty";
    if (!isEmail(data.email)) errors.email = "Email must be a valid email";
    if (!data.password) errors.password = "Password should not be empty";
    if (!data.first_name) errors.first_name = "Required field";
    if (!data.last_name) errors.last_name = "Required field";

    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    const message = "Loading...";
    return (
      <div>
        {loading && <LoadingState message={message} />}
        <Form onSubmit={this.onSubmit}>
          {errors.email && (
            <div className="alert alert-danger">{errors.email}</div>
          )}
          <Row>
            <Col sm="6">
              <FormGroup>
                <Label>
                  First Name <span className="required">*</span>
                </Label>
                <Input
                  type="text"
                  name="first_name"
                  value={data.first_name}
                  onChange={this.onChange}
                  invalid={!!errors.first_name || !!errors.first_name}
                />
                <FormFeedback>{errors.first_name}</FormFeedback>
              </FormGroup>
            </Col>

            <Col sm="6">
              <FormGroup>
                <Label>
                  Last Name <span className="required">*</span>
                </Label>
                <Input
                  type="text"
                  name="last_name"
                  value={data.last_name}
                  onChange={this.onChange}
                  invalid={!!errors.last_name || !!errors.last_name}
                />
                <FormFeedback>{errors.last_name}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>

          <FormGroup>
            <Label>
              Email <span className="required">*</span>
            </Label>
            <Input
              type="text"
              placeholder="ex: myname@example.com"
              name="email"
              value={data.email}
              onChange={this.onChange}
              invalid={!!errors.email || !!errors.email}
            />
            <FormFeedback>{errors.email}</FormFeedback>
            <div className="error">{errors.email ? errors.email : null}</div>
          </FormGroup>
          <FormGroup>
            <Label>Phone(International format)</Label>
            <Input
              type="text"
              placeholder="ex: +254712345678"
              name="phone"
              value={data.phone}
              onChange={this.onChange}
              invalid={!!errors.phone || !!errors.message}
            />
            <FormFeedback>{errors.emailOrPhone}</FormFeedback>
            <div className="error">{errors.phone ? errors.phone : null}</div>
          </FormGroup>

          <FormGroup>
            <Label>
              Password <span className="required">*</span>
            </Label>
            <Input
              type="password"
              name="password"
              value={data.password}
              onChange={this.onChange}
              invalid={!!errors.password}
            />
            <FormFeedback>{errors.password}</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label>Location</Label>
            <Input
              type="select"
              name="location"
              id="location"
              value={data.location}
              onChange={this.onChange}
              invalid={!!errors.location}
            >
              <option />

              <option>Nairobi</option>
              <option>Kibera</option>
            </Input>
            <FormFeedback>{errors.location}</FormFeedback>
            <span>Nairobi, Kibera</span>
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                defaultChecked={this.state.checked}
                onClick={this.onClick}
              />{" "}
              By registering, you agree to our{" "}
              <Link
                style={{ color: "#dc3545", textDecoration: "underline" }}
                to="/privacy"
              >
                terms and privacy policies.
              </Link>
            </Label>
          </FormGroup>
          <Button block color="danger" disabled={!this.state.checked}>
            Register
          </Button>
        </Form>
      </div>
    );
  }
}

export default RegisterForm;
