import React, { Component } from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import InputWrapper from "../input-type-number/input-wrapper";
import InputText from "../input-text/input-text";
import Table from "./table";

class TradeLayout extends Component {
  state = {};
  render() {

    return (
      <div className="section-body container-fluid position-relative">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={12}>
              <Nav
                variant="pills"
                className="flex-row row d-flex justify-content-center shadow-lg"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Buy</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Sell</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={12}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className="row">
                    <div className="col-lg-6 my-2">
                      <div className="sub-body d-flex justify-content-center">
                        <div className="input-wrapper position-relative d-inline-block">
                          <select id="order-type" defaultValue="" required>
                            <option value="" disabled hidden />
                            <option>Sell-stop</option>
                            <option>Buy-stop</option>
                            <option>Stop-limit</option>
                            <option>Trailing-stop</option>
                            <option>Trailing-stop-limit</option>
                          </select>
                          <label
                            className="position-absolute label"
                            htmlFor="order-type"
                          >
                            Order Type
                          </label>
                          <i className="material-icons position-absolute">expand_more</i>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 my-2">
                      <div className="sub-body d-flex justify-content-center">
                        <InputText
                          id="ticker-search"
                          maxLength="5"
                          placeholder="TSLA"
                          label="Ticker"
                          materialIcon="search"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 my-2">
                      <div className="sub-body d-flex justify-content-center">
                        <InputWrapper id={"amount"} label={"Amount"} />
                      </div>
                    </div>
                    <div className="col-lg-6 my-2">
                      <div className="sub-body d-flex justify-content-center">
                        <InputWrapper id={"price"} label={"Price"} />
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center align-items-center my-4">
                    <button type="button" className="btn btn-success">
                      Submit Purchase
                    </button>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  {" "}
                  <Table />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default TradeLayout;
