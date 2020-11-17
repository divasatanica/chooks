import { useEffect } from 'react';

function useUnmount(callback: (...args: any[]) => any) {
  useEffect(() => callback, []);
}

export {
  useUnmount
}