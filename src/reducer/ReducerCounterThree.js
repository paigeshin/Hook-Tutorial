import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const ReducerCounter = () => {
  const [count, dispatchCount] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <div>Count: {count}</div>
        <button onClick={() => dispatchCount("INCREMENT")}>Increment</button>
        <button onClick={() => dispatchCount("DECREMENT")}>Decrement</button>
        <button onClick={() => dispatchCount("RESET")}>Reset</button>
      </div>
      <div>
        <div>Count: {countTwo}</div>
        <button onClick={() => dispatchTwo("INCREMENT")}>Increment</button>
        <button onClick={() => dispatchTwo("DECREMENT")}>Decrement</button>
        <button onClick={() => dispatchTwo("RESET")}>Reset</button>
      </div>
    </div>
  );
};

export default ReducerCounter;
