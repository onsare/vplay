import React from "react";
import { Row, Container, Col, Card, CardBody } from "reactstrap";
import { connect } from "react-redux";

import LoginForm from "../forms/LoginForm";
import { login } from "../../redux/actions/user";

class LoginPage extends React.Component {
  submit = data =>
    this.props.login(data).then(() => this.props.history.push("/dashboard"));

  render() {
    return (
      <div className="login">
        <Container>
          <Row className="vh ">
            <Col
              sm={{ size: 5, offset: 7 }}
              xs="12"
              className="form-align-center page"
            >
              <Card>
                <CardBody>
                  <LoginForm submit={this.submit} />
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
  { login }
)(LoginPage);
