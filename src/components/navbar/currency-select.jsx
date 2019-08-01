import React from "react";

function CurrencySelect() {
  return (
    <div className="position-relative currency-select">
      <select>
        <option>CAD</option>
        <option>JPY</option>
        <option>BRY</option>
      </select>
      <i className="material-icons position-absolute">expand_more</i>
    </div>
  );
}

export default CurrencySelect;
