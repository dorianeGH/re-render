import React, { useState } from "react";
import Compo2 from "./Compo2";
import Compo4 from "./Compo4";

export const Compo1 = () => {
  console.log("render: grandMa");
  const [count, setCount] = useState(10);

  const handleClick = () => {
    setCount(count - 1);
  };
  return (
    <div
      style={{
        paddingLeft: 20,
        backgroundColor: "pink",
      }}
    >
      <span style={{ fontWeight: "bold" }}>Compo1:</span>{" "}
      <button onClick={handleClick}>decrement</button>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Compo2 />
        <Compo4 />
      </div>
    </div>
  );
};

export default Compo1;
