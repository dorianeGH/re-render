import React, { useState } from "react";

export const Compo3 = ({ color }) => {
  console.log("render petit enfant");
  const [count, setCount] = useState(18);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div style={{ backgroundColor: "orange", paddingLeft: 30 }}>
      <span style={{ fontWeight: "bold" }}>Compo3:</span>
      <p>
        GrandChild1 likes the color {color} and count {count}
      </p>
      <button onClick={handleClick}>increment</button>{" "}
    </div>
  );
};

export default Compo3;
