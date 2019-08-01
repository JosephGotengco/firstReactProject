import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

import CurrencySelect from "./currency-select";
import AccountIcon from "./account-icon";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <Navbar expand="lg" variant="dark">
        <div className="nav-title" href="/home">
          {this.props.title}
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-5 d-flex align-items-center">
            <Nav.Link className="link" href="#home">
              Home
            </Nav.Link>
            <Nav.Link href="/trading">Trading</Nav.Link>
            <Nav.Link href="/Account">Account</Nav.Link>
            <CurrencySelect />
            <AccountIcon />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
