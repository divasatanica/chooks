import React, { useState } from 'react';
import { useChangedProps } from '../../src';

export default function Counter(props) {
  console.log('Render Counter');
  const [count, setCount] = useState(props.init);
  useChangedProps(props, (prev, props) => {
    console.log('Old Props:', prev, ' New Props:', props);
    if (prev.init !== props.init) {
      setCount(props.init);
    }
  });
  return (
    <>
      <span>Now: {count}</span>
      
      <button onClick={() => setCount(c => c + 1)}> Add </button>
    </>
  )
}