import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/index';
import style from './index.module.css';

ReactDOM.render(
  <StrictMode>
    <div className={style.root}>
      <Routes />
    </div>
  </StrictMode>,
  document.getElementById('root')
);
