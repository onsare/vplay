import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { connect } from "react-redux";

import { logout } from "../../redux/actions/user";

class Settings extends Component {
  state = {};
  render() {
    return (
      <div className="page vh">
        <Container>
          <Row>
            <Col sm={{ size: 8, offset: 2 }}>
              <h1>My Settings</h1>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col sm={{ size: 5, offset: 2 }}>
              <Button onClick={() => this.props.logout()} color="danger">
                Sign Out
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default connect({ logout })(Settings);
