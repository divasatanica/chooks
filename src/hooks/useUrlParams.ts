import { useMemo } from 'react';
import { getUrlParams } from '@/utils/tools';

function useUrlParams<T>(name: string, calculator: (val: string) => T): T {
  const _calc = calculator || (val => val);
  const value = getUrlParams(name) as string;
  const memoizedValue = useMemo(() => _calc(value), [_calc, value]);

  return memoizedValue;
}

export {
  useUrlParams
};