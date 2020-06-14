import React, { useState } from "react";

function Hooks2() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevState) => prevState + 1);
  }
  function decrement() {
    setCount((prevState) => prevState - 1);
  }
  function double() {
    setCount((prevState) => prevState * 2);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={double}>Double</button>
    </div>
  );
}

export default Hooks2;
