import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "DECREMENT":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "INCREMENT2":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "DECREMENT2":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "SECOND_INCREMENT":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "SECOND_DECREMENT":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const ReducerCounterTwo = () => {
  const [count, dispatchCount] = useReducer(reducer, initialState);

  return (
    <div>
      <div>First Count: {count.firstCounter}</div>
      <div>Second Count: {count.secondCounter}</div>
      <button onClick={() => dispatchCount({ type: "INCREMENT", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatchCount({ type: "DECREMENT", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatchCount({ type: "INCREMENT", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatchCount({ type: "DECREMENT", value: 5 })}>
        Decrement 5
      </button>
      <button
        onClick={() => dispatchCount({ type: "SECOND_INCREMENT", value: 3 })}
      >
        Increment Second Counter
      </button>
      <button
        onClick={() => dispatchCount({ type: "SECOND_DECREMENT", value: 3 })}
      >
        Decrement Second Counter
      </button>
      <button onClick={() => dispatchCount({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default ReducerCounterTwo;
