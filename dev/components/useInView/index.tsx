import React, { useRef } from 'react';
import { useInView, usePageTitle } from '../../../src/index';
import style from './index.module.css';

export default function UseInView() {
  const ref = useRef(null);
  const inView = useInView(ref);
  usePageTitle(inView ? 'InView' : 'NotInView');
  return (
    <div className={style.container}>
      <h2> Scroll Down and check the document's title.</h2>
      <h1 className={style.heading} ref={ref}>I'm View Test</h1>
    </div>
  )
}