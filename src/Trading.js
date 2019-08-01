import React, { Component } from "react";

// import Graph from "./components/graph-section/graph";
import GraphLayout from "./components/graph-section/graph-layout";
import SearchLayout from "./components/search-section/search-layout";
import TradeLayout from "./components/trade-section/trade-layout";
import moment from "moment";

import {} from "material-icons";
import "./components/css/trading.css";
import SectionHeader from "./components/sections/section-header";

class Trading extends Component {
  state = {
    ticker: "",
    date: "",
    name: "",
    sector: "",
    close: "",
    beta: "",
    dividend: "",
    msg: "",
    graphTitle: "",
    graphData: [],
    graphDate: "1m",
    rate: 1.0
  };

  constructor() {
    super();
    console.log("Trading - Constructor");
  }

  componentDidMount() {
    // Ajax Call
    console.log("Trading - Mounted");
  }

  handleGraphData = () => {
    fetch(
      `https://cloud.iexapis.com/stable/stock/${this.state.ticker}/chart/${
        this.state.graphDate
      }?token=pk_5187144627fe41f783caf3f0341d7f3e`
    )
      .then(res => res.json())
      .then(
        result => {
          console.log("result", result);

          this.setState({
            isLoaded: true,
            graphData: result,
            graphTitle: this.state.ticker
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };

  handleInputChange = e => {
    console.log(e.target.value);
    if (e.target.id === "graph-period") {
      this.setState({ graphDate: e.target.value });
    } else if (e.target.id === "ticker-search") {
      this.setState({ ticker: e.target.value });
    }
  };

  handleSearch = () => {
    var status;
    fetch(
      `https://cloud.iexapis.com/stable/stock/${
        this.state.ticker
      }/previous?token=pk_5187144627fe41f783caf3f0341d7f3e`
    )
      .then(response => {
        if (response.status !== 200) {
          this.setState({
            msg: `No data can be found for '${this.state.ticker}'.`
          });
        } else {
          response = response.json();
          status = true;
          return response;
        }
      })
      .then(
        result => {
          if (status) {
            var date = moment(result.date).format("MMM DD, YYYY");
            this.setState({
              close: result.close,
              msg: `Data for '${this.state.ticker}' on ${date}.`,
              date: date
            });
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          console.log(error);
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
    fetch(
      `https://cloud.iexapis.com/stable/stock/${
        this.state.ticker
      }/quote?token=pk_5187144627fe41f783caf3f0341d7f3e`
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            name: result["companyName"]
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
    fetch(
      `https://cloud.iexapis.com/stable/tops/?symbols=${
        this.state.ticker
      }&token=pk_5187144627fe41f783caf3f0341d7f3e`
    )
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          if (result[0] != undefined) {
            this.setState({
              isLoaded: true,
              sector: result[0]["sector"]
            });
          }
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
    fetch(
      `https://cloud.iexapis.com/stable/stock/${
        this.state.ticker
      }/stats/beta?token=pk_5187144627fe41f783caf3f0341d7f3e`
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            beta: Math.round(result * 100) / 100
          });
          console.log(this.state);
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
    fetch(
      `https://cloud.iexapis.com/stable/stock/${
        this.state.ticker
      }/dividends/next?token=pk_5187144627fe41f783caf3f0341d7f3e`
    )
      .then(res => res.json())
      .then(
        result => {
          if (result[0] === undefined) {
            result[0] = "N/A";
          }
          this.setState({
            isLoaded: true,
            dividend: result[0]
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
      this.handleGraphData();
  };

  render() {
    console.log("Trading - Rendered");
    const {
      ticker,
      close,
      graphTitle,
      graphData,
      graphDate,
      msg,
      sector,
      beta,
      dividend,
      name,
      rate
    } = this.state;

    return (
      <React.Fragment>
        <main className="container-fluid">
          <div className="row">
            <div className="col-lg-7 mb-3">
              <section className="graph-section">
                <GraphLayout
                  ticker={graphTitle}
                  close={close}
                  graphData={graphData}
                  graphDate={graphDate}
                  onDateChange={this.handleInputChange}
                  rate={rate}
                />
              </section>
            </div>
            <div className="col-lg-5">
              <section className="search-section mb-3">
                <SectionHeader title="Search" />
                <SearchLayout
                  ticker={ticker}
                  onTickerChange={this.handleInputChange}
                  onSearch={this.handleSearch}
                  msg={msg}
                  sector={sector}
                  close={close}
                  beta={beta}
                  dividend={dividend}
                  name={name}
                  rate={rate}
                />
              </section>
              <section className="trading-section">
                <SectionHeader title="Trade" />
                <TradeLayout />
              </section>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Trading;
