// CounterPage.js
import React from 'react';
import useCounter from './useCounter';
import './CounterPage.css';

const CounterPage = () => {
  const { count, increment, decrement, reset, setValue } = useCounter();

  return (
    <div>
      <h1>Wonder AltSchool Counter: {count}</h1>
      <button onClick={increment}>Increase(+)</button>
      <button onClick={decrement}>Decrease(-)</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => setValue(10)}>Set to 10</button>
      <button onClick={() => setValue(50)}>Set to 50</button>
      <button onClick={() => setValue(100)}>Set to 100</button>

      <input
        type="number"
        value={count}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    </div>

  );
};

export default CounterPage;
