import { useState, useEffect } from 'react';

type PropsCallback<T> = (prevProps: T, props: T) => void;

function useChangedProps<T>(initialProps: T, callback: PropsCallback<T>): void {
  const [, setPrevProps] = useState(initialProps);

  useEffect(() => {
    setPrevProps(p => {
      if (p === initialProps) {
        return initialProps;
      }
      callback(p, initialProps);
      return initialProps;
    });
  }, [initialProps]);
}

export {
  useChangedProps
}