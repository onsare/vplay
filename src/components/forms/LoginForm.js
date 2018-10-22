import React, { Component } from "react";
import {
  Container,
  Form,
  Label,
  Input,
  Col,
  Row,
  FormGroup,
  Button
} from "reactstrap";

class LoginForm extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Row>
          <Col sm={{ size: 5, offset: 7 }}>
            <div className="card">
              <h1>Please login to your account</h1>
              <Form>
                <FormGroup>
                  <Label for="Email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="Email"
                    placeholder="Please enter your email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="Password"
                    placeholder="password placeholder"
                  />
                </FormGroup>
                <Button>Login</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LoginForm;
