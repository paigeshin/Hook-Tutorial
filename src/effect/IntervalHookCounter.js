import React, { useEffect, useState } from "react";

const IntervalHookCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const tick = () => {
      console.log(`count: ${count}`);
      setCount((prevCount) => prevCount + 1);
    };
    const interval = setInterval(tick, 1000);
    return () => {
      console.log("Cleared Interval");
      clearInterval(interval);
    };
  }, [count]);

  return <div>{count}</div>;
};

export default IntervalHookCounter;
