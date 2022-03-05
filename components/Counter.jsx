import React, { useContext } from "react";
import { Store } from "../store/counterReducer";

const Counter = () => {
  const { counter, incrementCounter, decrementCounter } = useContext(Store);

  return (
    <div className="flex space-x-4 text-5xl">
      <button onClick={() => decrementCounter(5)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => incrementCounter(5)}>+</button>
    </div>
  );
};

export default Counter;
