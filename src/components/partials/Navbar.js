import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";

import Ionicon from "react-ionicons";

export default class Navigation extends React.Component {
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
    return (
      <Navbar color="faded" light expand="md" fixed="top">
        <NavbarBrand href="/">vPlay</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/categories">Categories</NavLink>
            </NavItem>
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
                <DropdownItem href="/profile">
                  {" "}
                  <Ionicon icon="ios-person" fontSize="25px" color="#C9C9C9" />
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
                <DropdownItem>
                  <Ionicon icon="ios-log-out" fontSize="25px" color="#C9C9C9" />
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
