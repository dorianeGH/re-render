import React, { useState } from "react";
import Compo3 from "./Compo3";

export const Compo2 = ({ meal1 }) => {
  console.log("render enfant1");
  const [count, setCount] = useState(0);
  const dessert = "tiramisu";

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div style={{ backgroundColor: "red", paddingLeft: 30 }}>
      <span style={{ fontWeight: "bold" }}>Compo2:</span>{" "}
      <p>
        Child1 received {meal1} and add {count} {dessert}
      </p>
      <button onClick={handleClick}>increment</button>
      <Compo3 color={"yellow"} />
    </div>
  );
};

export default Compo2;
