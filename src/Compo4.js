import React, { useState, useMemo } from "react";
import Compo5 from "./Compo5";

export const Compo4 = () => {
  console.log("render");
  const name = "do";
  const sayHi = useMemo(() => {
    console.log("sayHi is executed and rerender");
    alert("Hi you " + name);
  }, [name]);
  return (
    <div
      style={{
        backgroundColor: "#9BF6FF",
        paddingLeft: 30,
      }}
    >
      <span style={{ fontWeight: "bold" }}>Compo4:</span> <p>Child2</p>
      {sayHi}
      {name}
      <Compo5 />
    </div>
  );
};
export default Compo4;
