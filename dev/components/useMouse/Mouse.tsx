import React from 'react';
import { useMousePosition } from '../../../src';

export default function Mouse() {
  const { clientX, clientY } = useMousePosition();

  return (
    <div>
      MousePosition, X: {isNaN(clientX) ? 0 : clientX}, Y: {isNaN(clientY) ? 0 : clientY}
    </div>
  )
}