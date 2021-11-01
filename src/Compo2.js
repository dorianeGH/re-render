import React, { useState } from "react";
import Compo3 from "./Compo3";

export const Compo2 = () => {
  console.log("render enfant1");
  const [count, setCount] = useState(0);
  const [name, setName] = useState("initialName");

  return (
    <div style={{ backgroundColor: "#FDFFB6", paddingLeft: 30 }}>
      <span style={{ fontWeight: "bold" }}>Compo2:</span> <p>Child1</p>
      {setTimeout(setName("Paul"), 5000)}
      <button>increment</button>
      <Compo3 color={"yellow"} />
    </div>
  );
};

export default Compo2;
