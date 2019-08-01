import React, { Component } from "react";

class IncreaseButton extends Component {
  state = {};

  render() {
    return (
      <i className="material-icons position-absolute inc-btn" onClick={() => this.props.onIncrease()}>
        expand_less
      </i>
    );
  }
}

export default IncreaseButton;
