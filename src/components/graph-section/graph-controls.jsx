import React, { Component } from "react";

class GraphControls extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="d-block">
          <h6 className="text-secondary">Current Price:</h6>
          <h4>{this.props.currencySymbol} {this.props.currentPrice}</h4>
        </div>

        <div className="d-block ml-auto">
          <div className="input-wrapper position-relative d-inline-block">
            <select id="graph-period" defaultValue={this.props.graphDate} onChange={this.props.onDateChange} required>
              <option value="1m">1m</option>
              <option value="3m">3m</option>
              <option value="6m">6m</option>
              <option value="1y">1y</option>
              <option value="2y">2y</option>
              <option value="5y">5y</option>
              <option value="max">max</option>
            </select>
            <label className="position-absolute label" htmlFor="graph-period">
              Time
            </label>
            <i className="material-icons position-absolute">expand_more</i>
          </div>
          <div className="input-wrapper position-relative d-inline-block">
            <select id="graph-type" defaultValue="lineC" required>
              <option value="lineC">Line Chart</option>
              <option>Bar Chart</option>
              <option>Pie Chart</option>
              <option>Candlestick Chart</option>
            </select>
            <label className="position-absolute label" htmlFor="graph-type">
              Graph Type
            </label>
            <i className="material-icons position-absolute">expand_more</i>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GraphControls;
