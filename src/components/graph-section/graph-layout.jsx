import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import GraphControls from "./graph-controls";
import Graph from "./graph";

class GraphLayout extends Component {
  state = {
  };

  render() {
    const { close, ticker, graphData, graphDate, rate, onDateChange } = this.props;

    return (
      <div className="section-body container-fluid position-relative">
        <Row>
          <Col lg className="mx-4 d-flex align-items-center">
            <GraphControls currencySymbol graphDate={graphDate} onDateChange={onDateChange} currentPrice={close * rate}/>
          </Col>
        </Row>
        <Row>
          <Col lg>
            <div className="graph-wrapper position-relative">
              <div className="position-absolute d-flex w-100 h-100">
                <Graph ticker={ticker} graphData={graphData} rate={rate}/>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default GraphLayout;
