import React, { useState, useEffect } from 'react';
import { useToggle } from '../../../src';

export default function ToggleBackground() {
  const [isDefaultNight, setIsDefaultNight] = useState(false);
  const [isNight, toggleIsNight] = useToggle(isDefaultNight);

  useEffect(() => {
    const appHeader = document.getElementById('app-body');
    if (!appHeader) {
      return;
    }
    if (isNight) {
      appHeader.style.backgroundColor = '#282c34';
      appHeader.style.color= '#fff';
    } else {
      appHeader.style.backgroundColor = '#fff';
      appHeader.style.color= '#333';
    }
  }, [isNight]);

  return (
    <div>
      <input type="radio" id="yes" name="night" onChange={() => setIsDefaultNight(true)} />
      <label htmlFor="yes">是</label>
      <input type="radio" id="no" name="night" onChange={() => setIsDefaultNight(false)} />
      <label htmlFor="no">否</label>
      <button onClick={() => toggleIsNight()}>切换</button>
    </div>
  )
} 