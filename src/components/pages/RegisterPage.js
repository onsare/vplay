import React from "react";
import { connect } from "react-redux";
import {
  Row,
  Container,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

import RegisterForm from "../forms/RegisterForm";
import { register } from "../../redux/actions/user";

class RegisterPage extends React.Component {
  submit = data =>
    this.props.register(data).then(() => this.props.history.push("/dashboard"));

  render() {
    return (
      <Container>
        <Row className="page mb20">
          <Col
            sm={{ size: 5, offset: 7 }}
            xs="12"
            className="form-align-center"
          >
            <Card>
              <CardTitle>Please register below</CardTitle>

              <CardSubtitle>
                All fields with an asterisk (*) are required.
              </CardSubtitle>
              <CardBody>
                <RegisterForm submit={this.submit} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(
  null,
  { register }
)(RegisterPage);
