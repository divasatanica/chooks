import React, { useState }  from 'react';
import Counter from './Counter';

export default function CounterIndex() {
  const [initCounter, setInitCounter] = useState(0);
  return (
    <div>
      <Counter init={initCounter} />
      <button onClick={() => setInitCounter(c => c + 1)}> Add </button>
    </div>
  )
}