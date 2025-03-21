import React, { useState } from "react";

const PhValue = () => {

   
    
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");
  function Myfunction(x) {
    console.log(x);
    if (inputValue > 6.5 && inputValue < 8.5) {
      setMessage("Water is safe to drink");
    } else {
      setMessage("water is not safe to drink");
    }
  }


  return (
    <>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
        type="number"
        placeholder="Please enter pH value"
      />
      <button onClick={()=>setInputValue("")}>Clear ALL</button>
      <button onClick={Myfunction}>Submit</button>
      {message && <p>{message}</p>}
    </>
  );
};

export default PhValue;

