import React, { useState } from 'react';
import './index.css';

const CounterApp = ({ value = 10 }) => {
  const [counter, setCounter] = useState(value);

  const add = () => setCounter(counter + 1);

  const remove = () => setCounter(counter - 1);

  const reset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={add}>+1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={remove}>-1</button>
    </>
  );
};

export default CounterApp;
