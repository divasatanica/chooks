import { useMemo } from 'react';
import { getUrlParams } from '../../utils/tools';

const passThrough = (val: string) => {
  return val;
}

function useUrlParams(name: string, calculator?: (val: string) => any): any {
  const _calc = calculator || passThrough;
  const value = getUrlParams(name) as string;
  const memoizedValue = useMemo(() => _calc(value), [_calc, value]);

  return memoizedValue;
}

export {
  useUrlParams
};