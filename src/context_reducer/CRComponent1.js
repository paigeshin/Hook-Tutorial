import React, { useContext } from "react";
import { CountContext } from "../App";

const CRComponent1 = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      <div>Context with Reducer Component 1</div>
      {/* <div>Count: {countContext.countState}</div> */}
      <button onClick={() => countContext.countDispatch("INCREMENT")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("DECREMENT")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("RESET")}>Reset</button>
    </div>
  );
};

export default CRComponent1;
