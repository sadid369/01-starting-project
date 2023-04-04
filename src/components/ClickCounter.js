import React, { useState } from "react";

function ClickCounter() {
  const [count, setCounter] = useState(0);

  const incrementCount = () => {
    setCounter(count + 1);
  };
  return (
    <>
      <button type="button" onClick={incrementCount}>
        Click {count} time
      </button>
    </>
  );
}

export default ClickCounter;
