import React, { useState } from "react";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  console.log('inputValue',inputValue);
  

  function todo() {
    if (inputValue.trim() === "") return;
    setTask([...task, {id:new Date(),text:inputValue}]);
    setInputValue("");
  }

  console.log(task);
  

  return (
    <>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Enter a Task"
        value={inputValue}
      />
      <button onClick={todo}>ADD</button>
      <ul>
        {task?.map((item, index) => {
          <div>
            <li key={index}>{item.text}</li>
          </div>;
        })}
      </ul>
    </>
  );
};

export default Todo;
