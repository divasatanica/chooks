import React from 'react';

export default function Countdown({ target, day, hour, min, sec }) {
  return (
    <>
      <span>离{target.getFullYear()}年{target.getMonth() + 1}月{target.getDate()}日还有</span>
      <span>{day}天 {hour}小时 {min}分钟 {sec}秒</span>
    </>
  )
}