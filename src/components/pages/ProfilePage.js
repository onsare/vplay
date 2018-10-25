import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

class Profile extends Component {
  state = {};
  render() {
    const { user } = this.props;
    return (
      <div className="page vh">
        <Container>
          <Row>
            <Col sm={{ size: 8, offset: 2 }}>
              <h1>My Profile</h1>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col sm={{ size: 2, offset: 2 }}>
              <img
                src="./assets/images/avatar.png"
                alt="avatar"
                width="100%"
                height="auto"
              />
            </Col>
            <Col sm="5">
              <h2>Id: {user.id}</h2>
              <h2>First Name: {user.firstName}</h2>
              <h2>
                Last Name:
                {user.lastName}
              </h2>
              <h2>Location: {user.location === "4" ? "Nairobi" : "Kibera"}</h2>
              <h2>Phone number: {user.phoneNumber}</h2>
              <h2>Date Joined: {user.date_joined}</h2>
              <h2>Active: {user.isActive === true ? "Yes" : "No"}</h2>
            </Col>
          </Row>
          <Row>
            <Col sm={{ size: 5, offset: 2 }}>
              <Link to="/settings">
                <Button color="danger">Change Settings</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Profile);
