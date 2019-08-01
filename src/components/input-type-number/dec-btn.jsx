import React, { Component } from "react";

class DecreaseButton extends Component {
  state = {};

  render() {
    return (
      <i className="material-icons position-absolute dec-btn" onClick={() => this.props.onDecrease()}>
        expand_more
      </i>
    );
  }
}

export default DecreaseButton;
