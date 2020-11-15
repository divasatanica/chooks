import { useRef, useEffect, useState } from 'react';
import { isDate } from '@/utils/type';

const SECOND = 1000;
const MIN = 60 * SECOND;
const HOUR = 60 * MIN;
const DAY = 24 * HOUR;

interface IUseCountdownOption {
  updateFrequency?: number;
}

const DEFAULT_OPTION: IUseCountdownOption = {
  updateFrequency: 1000
}

function getTargetDate(target: number | Date | string): Date {
  return isDate(target) ? target : new Date(target);
}

function isSameDate(a: Date, b: Date) {
  return a.getTime() === b.getTime();
}

function getGapTime(target: Date) {
  const now = Date.now();
  const targetTime = target.getTime();
  const gap = targetTime - now;
  const day = Math.floor(gap / DAY);
  const hour = Math.floor((gap - day * DAY) / HOUR);
  const min = Math.floor((gap - day * DAY - hour * HOUR) / MIN);
  const sec = Math.floor((gap - day * DAY - hour * HOUR - min * MIN) / SECOND);

  return {
    day,
    hour,
    min,
    sec
  }
}

function useCountdown(target: number | Date | string, options: IUseCountdownOption = DEFAULT_OPTION ) {
  const timerRef = useRef(null as any);
  const targetDate = getTargetDate(target);
  const dateRef = useRef(targetDate);
  const [countdown, setCountdown] = useState(getGapTime(targetDate));
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      clearInterval(timerRef.current);
      return;
    }
    // If the type of target is Date, here we should turn them into timestamp to compare.
    if (target !== dateRef.current && isDate(target) && isSameDate(target, dateRef.current)) {
      return;
    }
    if (!target) {
      return;
    }
    dateRef.current = getTargetDate(target);
    clearInterval(timerRef.current);
    setCountdown(getGapTime(targetDate));
    timerRef.current = setInterval(() => {
      setCountdown(getGapTime(targetDate));
    }, options.updateFrequency);
  }, [target, paused]);

  return {
    data: countdown,
    stop: () => setPaused(true),
    start: () => setPaused(false)
  };
}

export {
  useCountdown
}