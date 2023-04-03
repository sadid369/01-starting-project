import React, { useReducer } from "react";

const intialSate = {
  counter: 8,
  counter2: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.value };
    case "decrement":
      return { ...state, counter: state.counter - action.value };
    case "increment2":
      return { ...state, counter2: state.counter2 + action.value };
    case "decrement2":
      return { ...state, counter2: state.counter2 - action.value };

    default:
      return state;
  }
};
function Counter() {
  const [count, dispatch] = useReducer(reducer, intialSate);
  return (
    <>
      <div>Count {count.counter}</div>
      <div>Count {count.counter2}</div>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "increment", value: 1 });
        }}
      >
        increment by 1
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "increment2", value: 1 });
        }}
      >
        increment2 by 1
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "decrement", value: 1 });
        }}
      >
        Decrement by 1
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "decrement2", value: 1 });
        }}
      >
        Decrement2 by 1
      </button>
    </>
  );
}

export default Counter;
