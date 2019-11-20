import React from "react";
import "./App.css";

function App() {
  const buttonClass = "btn btn-primary";
  return (
    <div className="App">
      <p>This project is using bootstrap . it is NOT using react-bootstrap</p>
      <p>This button is using the bootstrap classes : {buttonClass}</p>
      <button className={buttonClass}>Click Me</button>
    </div>
  );
}

export default App;
