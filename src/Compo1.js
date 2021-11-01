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
        backgroundColor: "#FFD6A5",
      }}
    >
      <span style={{ fontWeight: "bold" }}>Compo2:</span> <p>GrandMa</p>
      <button onClick={handleClick}>decrement</button>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Compo2 />
        <Compo4 />
      </div>
    </div>
  );
};

export default Compo1;
