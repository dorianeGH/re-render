import React, { useState } from "react";
import "./App.css";
import Compo1 from "./Compo1";

function App() {
  console.log("render App");
  const [count, setCount] = useState(0);
  const name = "do";
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div style={{ backgroundColor: "blue", paddingLeft: 10 }}>
      <p style={{ color: "white" }}>App' state</p>
      <button onClick={handleClick}>increment</button>
      <Compo1 />
    </div>
  );
}

export default App;
