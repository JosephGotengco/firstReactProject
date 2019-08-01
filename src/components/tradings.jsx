import React, { Component } from "react";
import Counter from "./trading";

class Tradings extends Component {
  render() {
    console.log('Tradings - Rendered');

    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Tradings;
