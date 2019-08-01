import React, { Component } from "react";
import InputText from "../input-text/input-text";
import ListItem from "./list-item";
import { Row } from "react-bootstrap";

class SearchLayout extends Component {
  state = {

  };


  render() {
    const { onTickerChange, onSearch, ticker, msg, sector, close, beta, dividend, name, rate } = this.props;

    return (
      <div className="section-body container-fluid position-relative">
        <Row>
          <div className="col-lg-12 mb-3">
            <div className="sub-body d-flex justify-content-center">
              <InputText
                id="ticker-search"
                maxLength="5"
                placeholder="TSLA"
                label="Ticker"
                onValueChange={onTickerChange}
                materialIcon="search"
                onSearch={onSearch}
              />
            </div>
            <div className="w-100 d-flex justify-content-center text-secondary">
              {msg}
            </div>
          </div>
          <div className="col-lg-6 mb-3">
            <div className="sub-header d-flex justify-content-center mb-3">
              Statistics For TSLA
            </div>
            <div className="sub-body">
              <ListItem label="Sector" data={sector} />
              <ListItem label="Current Price" data={close * rate} />
              <ListItem label="Beta" data={beta * rate} />
              <ListItem label="Dividend" data={dividend * rate} />
              <a
                className="d-block w-100"
                href="https://www.instagram.com/officiallyshrek/?hl=en"
              >
                More Statistics
              </a>
            </div>
          </div>
          <div className="col-lg-6 mb-3">
            <div className="sub-header d-flex justify-content-center mb-3">
              Company Info
            </div>
            <div className="sub-body">
              <div>
                Name:
                <div className="float-right">{name}</div>
              </div>
              <a
                className="d-block w-100"
                href="https://www.instagram.com/officiallyshrek/?hl=en"
                rel="noopener noreferrer"
                target="_blank"
              >
                News
              </a>
            </div>
            <div className="sub-header d-flex justify-content-center mb-3">
              Options
            </div>
            <div className="sub-body">
              <div>
                Favourite/Add to Watchlist:
                <div className="float-right">
                  <input
                    className="htmlForm-check-input"
                    type="checkbox"
                    ticker=""
                    id="defaultCheck1"
                  />
                </div>
              </div>
            </div>
          </div>
        </Row>
      </div>
    );
  }
}

export default SearchLayout;
