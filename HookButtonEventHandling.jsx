// Index
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));


// App component
import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [mouseOn, setMouseOn] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseEnter() {
    setMouseOn(true);
  }

  function handleMouseLeave() {
    setMouseOn(false);
  }

  const buttonStyle = {
    backgroundColor: mouseOn ? "green" : "white",
    color: mouseOn ? "white" : "black",
  };

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={buttonStyle}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
