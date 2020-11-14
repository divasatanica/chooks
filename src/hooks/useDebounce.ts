import { useCallback } from 'react';
import { debounce } from '@/utils/tools';

function useDebounce(fn: (...args: unknown[]) => unknown, delay: number): (...args: unknown[]) => unknown {
  const debounced = useCallback(debounce(fn, delay), [fn, delay]);

  return debounced;
}

export {
  useDebounce
};