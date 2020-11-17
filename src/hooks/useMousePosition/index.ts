import { useState, useEffect } from 'react';

export interface CursorState {
  screenX: number;
  screenY: number;
  clientX: number;
  clientY: number;
  pageX: number;
  pageY: number;
}

const initState: CursorState = {
  screenX: NaN,
  screenY: NaN,
  clientX: NaN,
  clientY: NaN,
  pageX: NaN,
  pageY: NaN,
};

function useMousePosition() {
  const [pos, setPos] = useState(initState);
  

  useEffect(() => {
    const setMousePosition = (e: MouseEvent) => {
      const { screenX, screenY, clientX, clientY, pageX, pageY } = e;
      setPos({
        screenX,
        screenY,
        clientX,
        clientY,
        pageX,
        pageY
      });
    };
    document.addEventListener('mousemove', setMousePosition);

    return () => {
      document.removeEventListener('mousemove', setMousePosition);
    }
  }, []);

  return pos;
}

export {
  useMousePosition
}