import React, { Component } from "react";

class SectionHeader extends Component {
  state = {};
  render() {
    return (
      <div className="section-header d-flex justify-content-center align-items-center">
        {this.props.title}
      </div>
    );
  }
}

export default SectionHeader;
