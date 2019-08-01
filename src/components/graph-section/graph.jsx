import React, { Component } from "react";
import Chart from "chart.js";
import moment from "moment";

export default class Graph extends Component {
  state = {};

  chartRef = React.createRef();
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.graphData !== this.props.graphData) {
      this.chart.data.labels = this.props.graphData.map(el => moment(el["date"]).format("MMM DD, YYYY"));

      var data = this.props.graphData.map(el => el.close * this.props.rate);
      this.chart.data.datasets[0] = {
        label: this.props.ticker.toUpperCase(),
        data: data,
        backgroundColor: [
          "rgba(46, 204, 113, 0.2)",
          "rgba(46, 204, 113, 0.1)",
          "rgba(46, 204, 113, 0.0)"
        ],
        borderColor: ["rgba(46, 204, 113, 1)"],
        responsive: true,
        maintainAspectRatio: false,
        fill: true,
        borderWidth: 1,
        pointHitRadius: 20,
        borderCapStyle: "miter",
        tension: 0.1
      };
      var sum = 0;
      for (var i = 0; i < data.length; i++) {
        sum += parseInt(data[i], 10); //don't forget to add the base
      }

      var avg = sum / data.length;

      Array.min = function(array) {
        return Math.min.apply(Math, array);
      };

      var minimum = Array.min(data);

      var suggestedMin = minimum - (avg - minimum) / 4;
      this.chart.options.scales.yAxes[0].ticks.suggestedMin = suggestedMin;

      this.chart.update();

      console.log("Datasets", this.chart.data.datasets[0]);
      console.log("Labels", this.chart.data.labels);
    }
  };

  componentDidMount = () => {
    const myChartRef = this.chartRef.current.getContext("2d");

    var gradient = myChartRef.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(250,174,50,1)");
    gradient.addColorStop(1, "rgba(250,174,50,0)");

    const labels = this.props.graphData.map(el => el["date"]);
    console.log("initial labels", labels);

    const data = this.props.graphData.map(el => el.close * this.props.rate);
    console.log("initial data", data);

    var sum = 0;
    for (var i = 0; i < data.length; i++) {
      sum += parseInt(data[i], 10); //don't forget to add the base
    }

    var avg = sum / data.length;

    Array.min = function(array) {
      return Math.min.apply(Math, array);
    };

    var minimum = Array.min(data);

    var suggestedMin = minimum - (avg - minimum) / 4;

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        labels: {
          boxWidth: 12,
          fontColor: "#ecf0f1"
        }
      },
      elements: {
        point: {
          radius: 0
        }
      },
      scales: {
        yAxes: [
          {
            ticks: {
              suggestedMin: suggestedMin,
              beginAtZero: false,
              fontColor: "#DCDDE1"
            },
            scaleLabel: {
              display: true,
              labelString: "Price",
              fontColor: "#DCDDE1"
            },
            gridLines: {
              color: "rgba(245, 246, 250, 0.2)"
            }
          }
        ],
        xAxes: [
          {
            type: "time",
            ticks: {
              source: "auto",
              fontColor: "#DCDDE1"
            },
            time: {
              displayFormats: {
                millisecond: "DD MMM",
                second: "DD MMM",
                minute: "DD MMM",
                hour: "DD MMM",
                day: "DD MMM",
                week: "DD MMM",
                month: "MMM",
                quarter: "DD MMM",
                year: "DD MMM"
              },
              unitStepSize: 1,
              unit: "month"
            },
            scaleLabel: {
              display: true,
              labelString: "Time",
              fontColor: "#DCDDE1"
            },
            gridLines: {
              color: "rgba(245, 246, 250, 0.2)"
            }
          }
        ]
      }
    };

    this.chart = new Chart(myChartRef, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: this.props.ticker.toUpperCase(),
            data: data,
            backgroundColor: [
              "rgba(46, 204, 113, 0.2)",
              "rgba(46, 204, 113, 0.1)",
              "rgba(46, 204, 113, 0.0)"
            ],
            borderColor: ["rgba(46, 204, 113, 1)"],
            responsive: true,
            maintainAspectRatio: false,
            fill: true,
            borderWidth: 1,
            pointHitRadius: 20,
            borderCapStyle: "miter",
            tension: 0.1
          }
        ]
      },
      options: options
    });
  };

  newDate(day, month) {
    return moment()
      .date(day)
      .month(month);
  }

  render() {
    return (
      <React.Fragment>
        <canvas id="myChart" ref={this.chartRef} />
      </React.Fragment>
    );
  }
}
