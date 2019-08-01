import React, { Component } from "react";

class Field extends Component {
  state = {};
  render() {
    const { id, label, defaultValue } = this.props;

    return (
      <React.Fragment>
        <div className="p-3 field-wrapper">
          <label className="d-block field-label" htmlFor={id}>
            {label}
          </label>
          <input className="field-input" id={id} defaultValue={defaultValue}/>
        </div>
      </React.Fragment>
    );
  }
}

export default Field;
