import React, { useState } from 'react';
import Storage from './components/Storage';
import Countdown from './components/CountdownConfig';
import ToggleBackground from './components/ToggleBackground';
import Hover from './components/Hover';
import Mouse from './components/Mouse';
import style from './App.module.css';

function App() {
  console.log('Render App');
  const [isNight, setIsNight] = useState(false);
  return (
    <div className={style.App}>
      <header className={style['App-header']} id="app-header">
        <Storage />
        <Countdown />
        <ToggleBackground onChange={setIsNight}/>
        { isNight ? 'dark' : 'light' }
        { isNight ? <Hover /> : null }
        <Mouse />
      </header>
    </div>
  );
}

export default App;
