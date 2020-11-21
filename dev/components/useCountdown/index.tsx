import React, { useState } from 'react';
import { useDebounce, useCountdown } from '../../../src';
import Countdown from './CountdownDisplay';

export default function CountdownConfig() {
  // console.log('Render Countdown Config');
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());
  const [day, setDay] = useState(now.getDate() + 1);
  const [date, setDate] = useState(new Date(year, month, day));
  const updateYear = useDebounce(setYear, 300);
  const updateMonth = useDebounce(setMonth, 300);
  const updateDay = useDebounce(setDay, 300);
  const onYearChange = e => {
    updateYear(Number(e.target.value));
  };
  const onMonthChange = e => {
    updateMonth(Number(e.target.value) - 1);
  };
  const onDayChange = e => {
    updateDay(Number(e.target.value));
  };
  const onSetDate = () => {
    const target = new Date(year, month, day);
    if (target.toString() === 'Invalid Date') {
      console.log('Invalid Date, Check Your Input');
      return;
    }
    setTarget(target);
    setDate(target);
  };
  const { data, start, stop, setTarget } = useCountdown(date);

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <input type="number" placeholder="year" onChange={onYearChange}></input>
      <input type="number" placeholder="month" onChange={onMonthChange} max={12} min={1}></input>
      <input type="number" placeholder="day" onChange={onDayChange} max={31} min={1}></input>
      <Countdown {...data} target={date}/>
      <button onClick={onSetDate}>Sets</button>
      <button onClick={stop}>暂停</button>
      <button onClick={start}>重启</button>
    </div>
  )
}