import { useEffect } from 'react';

function useMount(callback: (...args: any[]) => any) {
  useEffect(() => {
    callback();
  }, []);
}

export {
  useMount
}