import React, { Component } from "react";
import IncreaseButton from "./inc-btn";
import DecreaseBUtton from "./dec-btn";

class InputWrapper extends Component {
  state = {
    value: ""
  };
  componentDidMount() {
    console.log("Input Wrapper - Mounted");
  }

  handleIncrease = () => {
    var value = this.state.value + 1;
    this.setState({ value });
  };

  handleDecrease = () => {
    if (this.state.value > 0) {
      var value = this.state.value - 1;
      this.setState({ value });
    }
  };

  render() {
    return (
      <div className="input-wrapper position-relative d-inline-block">
        <input
          id={this.props.id}
          type="number"
          placeholder="0"
          defaultValue={this.state.value}
          required
        />
        <label
          className="position-absolute label"
          htmlFor={this.props.id}
          value={this.state.value}
        >
          {this.props.label}
        </label>
        <IncreaseButton onIncrease={this.handleIncrease} />
        <DecreaseBUtton onDecrease={this.handleDecrease} />
      </div>
    );
  }
}

export default InputWrapper;
