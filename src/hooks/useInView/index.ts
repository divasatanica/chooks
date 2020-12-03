import { useState, useEffect, MutableRefObject } from 'react';
import 'intersection-observer';

function isInView(target: HTMLElement | null): boolean {
  if (!target) {
    return false;
  }

  const viewPortWidth =
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const viewPortHeight =
    window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  const rect = target.getBoundingClientRect();

  if (rect) {
    const { top, bottom, left, right } = rect;
    return bottom > 0 && top <= viewPortHeight && left <= viewPortWidth && right > 0;
  }

  return false;
}

function useInView(target: MutableRefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(() => {
    const element = target.current;

    return isInView(element);
  });

  useEffect(() => {
    const element = target.current;

    if (!element) {
      return () => {};
    }
    try {
      const observer = new IntersectionObserver((entries) => {
        console.log('entries:', entries);
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        }
      });
  
      observer.observe(element as HTMLElement);
  
      return () => {
        observer.disconnect();
      };
    } catch (e) {
      console.error('Your browser doesn\'t support IntersectionObserver');
    }
  }, [target]);

  return inView;
}

export {
  useInView
}