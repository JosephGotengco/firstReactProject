import React, { Component } from "react";

import "react-tabulator/lib/styles.css"; // required styles
import "react-tabulator/lib/css/tabulator.min.css"; // theme
import { ReactTabulator } from "react-tabulator";

var sellBtn = (value, data, cell, row, options) => {
  return "<div class='sell-btn d-flex justify-content-center align-items-center'>Sell</div>";
};

var data = [
  { ticker: "TSLA", amount: 20, current_price: 214.92, profit: 0 },
  { ticker: "TSLA", amount: 20, current_price: 214.92, profit: 0 },
  { ticker: "TSLA", amount: 20, current_price: 214.92, profit: 0 },
  { ticker: "TSLA", amount: 20, current_price: 214.92, profit: 0 },
  { ticker: "TSLA", amount: 20, current_price: 214.92, profit: 0 },
  { ticker: "TSLA", amount: 20, current_price: 214.92, profit: 0 },
  { ticker: "TSLA", amount: 20, current_price: 214.92, profit: 0 },
  { ticker: "TSLA", amount: 20, current_price: 214.92, profit: 0 },
  { ticker: "TSLA", amount: 20, current_price: 214.92, profit: 0 },
  { ticker: "TSLA", amount: 20, current_price: 214.92, profit: 0 },
  { ticker: "TSLA", amount: 20, current_price: 214.92, profit: 0 }
];

var columns = [
  { title: "Ticker", field: "ticker", resizable: false, headerSort: false },
  { title: "Amount", field: "amount", resizable: false, headerSort: false },
  {
    title: "Current Price",
    field: "current_price",
    resizable: false,
    headerSort: false
  },
  { title: "Profit", field: "profit", resizable: false, headerSort: false },
  {
    formatter: sellBtn,
    align: "left",
    resizable: false,
    headerSort: false,
    cellClick: function(e, cell) {
      cell.getRow().delete();
      alert("Stock has been sold!");
    }
  }
];

class Table extends Component {
  state = {};
  render() {
    const options = {
      height: 215,
      movableRows: true
    };

    return <ReactTabulator columns={columns} data={data} options={options} />;
  }
}

export default Table;
