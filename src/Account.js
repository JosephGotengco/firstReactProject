import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Nav, Tab } from "react-bootstrap";
import Field from "./components/accounts/field";

import {} from "material-icons";
import "./components/css/account.css";

class Account extends Component {
  state = {
    firstName: "Danny",
    lastName: "Dovito",
    email: "ShrekFan@yahoo.ca",
    city: "New Jersey",
    country: "USA",
    imgSrc:
      "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1533970164/180809-Stern-Danny-Devito-hero_fmoisz",
    imgAlt: "Go fuck urself"
  };
  render() {
    return (
      <React.Fragment>
        <Container fluid="true" className="account-wrapper">
          <Row>
            <Col lg="12">
              <div className="w-100 d-flex flex-column align-items-center profile-wrapper">
                <img src={this.state.imgSrc} alt={this.state.imgAlt} />
                <h4>
                  {this.state.firstName} {this.state.lastName}
                </h4>
                <h5>
                  <i className="material-icons">location_on</i>
                  {this.state.city}, {this.state.country}
                </h5>
              </div>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col xl="3" className="d-flex flex-column align-items-center">
              <Field
                id="firstName"
                label="First Name"
                defaultValue={this.state.firstName}
              />
            </Col>
            <Col xl="3" className="d-flex flex-column align-items-center">
              <Field
                id="lastName"
                label="Last Name"
                defaultValue={this.state.lastName}
              />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col xl="3" className="d-flex flex-column align-items-center">
              <Field id="email" label="Email" defaultValue={this.state.email} />
            </Col>
            <Col xl="3" className="d-flex flex-column align-items-center">
              <Field
                id="location"
                label="Location"
                defaultValue={this.state.city + ", " + this.state.country}
              />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center pt-3">
            <button type="button" className="btn btn-success">
              Save Changes
            </button>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Account;
