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
      <div className="register">
        <Container>
          <Row>
            <Col
              sm={{ size: 5, offset: 7 }}
              xs="12"
              className="form-align-center page"
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
      </div>
    );
  }
}

export default connect(
  null,
  { register }
)(RegisterPage);
