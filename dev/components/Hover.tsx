import React, { useRef } from 'react';
import { useHover, useMount, useUnmount } from '../../src';

export default function Hover() {
  const ref = useRef(null);
  const isHovering = useHover(ref);
  useMount(() => {
    console.log('mounted');
  });
  useUnmount(() => {
    console.log('unmounted');
  });

  return (
    <div ref={ref}>
      { isHovering ? 'yes' : 'no' }
    </div>
  )
}