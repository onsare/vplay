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
import { isEmail } from "validator";
import LoadingState from "../states/LoadingState";
import { Link } from "react-router-dom";

class RegisterForm extends React.Component {
  state = {
    data: {
      title: "",
      gender: "",
      firstName: "",
      middleName: "",
      lastName: "",
      primaryEmail: "",

      password: "",
      confirmPassword: "",
      areaCode: "",
      phoneNumber: "",
      nationalId: "",

      streetAddressLine1: "",
      streetAddressLine2: "",
      city: "",
      state: "",
      location: "",
      membership: "",
      role: "Member"
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
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  validate = data => {
    const errors = {};

    if (!data.firstName) errors.firstName = "First name should not be empty";
    if (!data.lastName) errors.lastName = "Last name should not be empty";
    if (!data.primaryEmail)
      errors.primaryEmail = "Primary email should not be empty";
    if (!isEmail(data.primaryEmail))
      errors.primaryEmail = "Primary Email must be a valid email";

    if (!data.password) errors.password = "Password should not be empty";
    if (data.confirmPassword !== data.password)
      errors.confirmPassword = "passwords do not match";
    if (!data.confirmPassword)
      errors.confirmPassword = "Confirm Password should not be empty";

    if (!data.areaCode) errors.areaCode = "Area code should not be empty";
    if (!data.phoneNumber)
      errors.phoneNumber = "Phone number should not be empty";

    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    const message = "Loading...";
    return (
      <div>
        {loading && <LoadingState message={message} />}
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col sm="6">
              <FormGroup>
                <Label>
                  First Name <span className="required">*</span>
                </Label>
                <Input
                  type="text"
                  name="firstName"
                  value={data.firstName}
                  onChange={this.onChange}
                  invalid={!!errors.firstName}
                />
                <FormFeedback>{errors.firstName}</FormFeedback>
              </FormGroup>
            </Col>

            <Col sm="6">
              <FormGroup>
                <Label>
                  Last Name <span className="required">*</span>
                </Label>
                <Input
                  type="text"
                  name="lastName"
                  value={data.lastName}
                  onChange={this.onChange}
                  invalid={!!errors.lastName}
                />
                <FormFeedback>{errors.lastName}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>

          <FormGroup>
            <Label>
              Email <span className="required">*</span>
            </Label>
            <Input
              type="email"
              placeholder="ex: myname@example.com"
              name="primaryEmail"
              value={data.primaryEmail}
              onChange={this.onChange}
              invalid={!!errors.primaryEmail || !!errors.message}
            />
            <FormFeedback>{errors.primaryEmail}</FormFeedback>
            <div className="error">
              {errors.message ? errors.message.email : null}
            </div>
            <span>example@example.com</span>
          </FormGroup>

          <FormGroup>
            <Label>
              Choose Password <span className="required">*</span>
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
            <Label>
              Confirm Your Chosen Password <span className="required">*</span>
            </Label>
            <Input
              type="password"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={this.onChange}
              invalid={!!errors.confirmPassword}
            />
            <FormFeedback>{errors.confirmPassword}</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label>
              Phone Number <span className="required">*</span>
            </Label>

            <Input
              type="text"
              placeholder="ex: +254712345678 "
              name="phoneNumber"
              value={data.phoneNumber}
              onChange={this.onChange}
              invalid={!!errors.phoneNumber}
            />
            <FormFeedback>{errors.phoneNumber}</FormFeedback>
            <span>International format</span>
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
                checked={this.state.checked}
                onClick={this.onClick}
              />{" "}
              By registering, you agree to our{" "}
              <Link
                style={{ color: "#557438", textDecoration: "underline" }}
                to="/privacy"
              >
                terms and privacy policies.
              </Link>
            </Label>
          </FormGroup>
          <Button disabled={!this.state.checked}>Register</Button>
        </Form>
      </div>
    );
  }
}

export default RegisterForm;
