import React, { useReducer } from "react";

const intialSate = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;

    default:
      return state;
  }
};
function Counter() {
  const [count, dispatch] = useReducer(reducer, intialSate);
  return (
    <>
      <div>Count {count}</div>
      <button
        type="button"
        onClick={() => {
          dispatch("increment");
        }}
      >
        increment
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Decrement
      </button>
    </>
  );
}

export default Counter;
