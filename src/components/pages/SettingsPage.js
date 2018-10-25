import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";

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
              <Button color="danger">Sign Out</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Settings;
