import React, { useState, useMemo } from "react";

export const Compo4 = () => {
  console.log("render");
  const name = "do";
  const sayHi = () => {
    console.log("sayHi is executed and rerender");
    alert("Hi you " + name);
  };
  return (
    <div
      style={{
        backgroundColor: "yellow",
        paddingLeft: 30,
      }}
    >
      <span style={{ fontWeight: "bold" }}>Compo4:</span> {sayHi()}
      {name}
    </div>
  );
};
export default React.memo(Compo4);
