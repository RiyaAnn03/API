import React, { useState } from "react";

const Variable = () => {
  let a = 0;
  const [state, setState] = useState(0);
  const Counter = () => {
    ++a
    console.log("a inside counter",a);
    
    setState((prevalue) => prevalue + 1);
  };

//   console.log("a", a);

  console.log("state", state);

  return (
    <div>
      <button onClick={Counter}>add</button>
    </div>
  );
};

export default Variable;
