import { useRef } from 'react';
import { debounce } from '../../utils/tools';

function useDebounce(fn: (...args: unknown[]) => any, delay: number, thisValue?: unknown): (...args: unknown[]) => unknown | unknown {
  const fnRef = useRef(fn);
  fnRef.current = fn;
  const debounced = debounce(fnRef.current, delay, thisValue);
  const debounceRef = useRef(debounced);

  return debounceRef.current;
}

export {
  useDebounce
};