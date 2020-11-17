import { useState, useEffect, RefObject } from 'react';

function useHover(ref: RefObject<HTMLElement>) {
  const [isHovering, setIsHovering] = useState(false);
  

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const setHoveringTrue = () => setIsHovering(true);
    const setHoveringFalse = () => setIsHovering(false);
    ref.current.addEventListener('mouseenter', setHoveringTrue);
    ref.current.addEventListener('mouseleave', setHoveringFalse);

    // Remove event listeners while unmounting.
    return () => {
      if (!ref.current) {
        return;
      }
      ref.current.removeEventListener('mouseenter', setHoveringTrue);
      ref.current.removeEventListener('mouseleave', setHoveringFalse);
    }
  }, [ref, setIsHovering]);

  return isHovering;
}

export {
  useHover
}