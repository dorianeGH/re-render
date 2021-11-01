import React, { useState } from "react";

export const Compo5 = () => {
  console.log("render petit enfant");
  const [count, setCount] = useState(18);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div style={{ backgroundColor: "#A0C4FF", paddingLeft: 30 }}>
      <span style={{ fontWeight: "bold" }}>Compo5:</span>
      <p>GrandChild2</p>
      <button onClick={handleClick}>increment</button>{" "}
    </div>
  );
};

export default Compo5;
