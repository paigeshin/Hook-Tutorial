import React, { useState, useEffect } from "react";

const EffectCounter = () => {
  const [count, setCount] = useState(0);

  //useEffect renders after every single render
  useEffect(() => {
    document.title = `You clikced ${count} times`;
    console.log("use effect called");
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
};

export default EffectCounter;
