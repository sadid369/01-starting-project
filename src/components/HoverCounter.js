import React, { useState } from "react";

function HoverCounter() {
  const [count, setCounter] = useState(0);

  const incrementCount = () => {
    setCounter(count + 1);
  };
  return (
    <>
      <h1 type="button" onMouseOver={incrementCount}>
        Hover {count} time
      </h1>
    </>
  );
}

export default HoverCounter;
