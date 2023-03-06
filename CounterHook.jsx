//
//


import React from "react";
import ReactDOM from "react-dom";

let count = 0;

const increaseCount = () => {
  count++;
  ReactDOM.render(<App />, document.getElementById("root"));
};

const App = () => {
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increaseCount}>+</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
