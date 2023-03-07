// Index
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));


// App component
import React, { useState } from "react";

function App() {
  setInterval(getTime, 1000);
  // setInterval to enable the clock to continue ticking.
  let now = new Date().toLocaleTimeString();

  const [count, setCount] = useState(now);

  function getTime() {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    setCount(time);
  }
  // Must have 'second: 2-digit' or PM will overlap on the text.
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
