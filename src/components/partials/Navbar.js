import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";

import Ionicon from "react-ionicons";

import { connect } from "react-redux";

import { logout } from "../../redux/actions/user";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { user } = this.props;
    return (
      <Navbar color="faded" light expand="md" fixed="top">
        <NavbarBrand style={{ marginLeft: "25px" }} href="/">
          <img src="./assets/images/logo.png" alt="Logo" width="45px" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {!user && (
              <div style={{ display: "inherit" }}>
                <NavItem>
                  <Link to="/login">
                    <Button outline color="danger">
                      Login
                    </Button>
                  </Link>
                </NavItem>

                <NavItem>
                  <Link to="/register">
                    <Button color="danger">Register</Button>
                  </Link>
                </NavItem>
              </div>
            )}
            {user && (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <img
                    className="avatar"
                    src="./assets/images/avatar.png"
                    alt="username"
                  />
                  Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/dashboard">
                    {" "}
                    <Ionicon icon="ios-play" fontSize="25px" color="#C9C9C9" />
                    Media
                  </DropdownItem>
                  <DropdownItem href="/categories">
                    <Ionicon icon="ios-apps" fontSize="25px" color="#C9C9C9" />
                    Categories
                  </DropdownItem>
                  <DropdownItem href="/profile">
                    {" "}
                    <Ionicon
                      icon="ios-person"
                      fontSize="25px"
                      color="#C9C9C9"
                    />
                    Profile
                  </DropdownItem>
                  <DropdownItem href="/settings">
                    <Ionicon
                      icon="ios-settings"
                      fontSize="25px"
                      color="#C9C9C9"
                    />
                    Settings
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={() => this.props.logout()}>
                    <Ionicon
                      icon="ios-log-out"
                      fontSize="25px"
                      color="#C9C9C9"
                    />
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: !!state.user.id
  };
}

export default connect(
  mapStateToProps,
  { logout }
)(Navigation);
