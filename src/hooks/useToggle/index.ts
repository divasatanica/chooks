import { useState, useEffect } from 'react';

function useToggle(initialValue: boolean): [boolean, () => void] {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    setState(initialValue);
  }, [initialValue]);

  

  return [
    state,
    function toggle() {
      setState((state: boolean) => !state)
    }
  ]
}

export {
  useToggle
}