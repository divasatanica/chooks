import { useRef, useEffect, useState, useMemo } from 'react';
import { isDate } from '../../utils/type';

const SECOND = 1000;
const MIN = 60 * SECOND;
const HOUR = 60 * MIN;
const DAY = 24 * HOUR;

type IDate = Date | number | string | undefined;

interface IUseCountdownOption {
  updateFrequency?: number;
}

const DEFAULT_OPTION: IUseCountdownOption = {
  updateFrequency: 1000
}

function getTargetDate(target: IDate): Date {
  if (!target) {
    return new Date(0);
  }
  return isDate(target) ? target : new Date(target);
}

function getGapTime(target: IDate) {
  const dateObj = getTargetDate(target);
  const left = dateObj.getTime() - new Date().getTime();

  return Math.max(left, 0);
}

function parseLeft(left: number) {
  const gap = left;
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

function useCountdown(targetDate?: number | Date | string, options: IUseCountdownOption = DEFAULT_OPTION) {
  const timerRef = useRef(null as any);
  const [target, setTargetDate] = useState(targetDate);
  const [timeLeft, setTimeLeft] = useState(() => getGapTime(target));
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      clearInterval(timerRef.current);
      return;
    }
    if (!target) {
      setTimeLeft(0);
      return;
    }

    setTimeLeft(getGapTime(target));

    const timer = timerRef.current = setInterval(() => {
      const timeLeft = getGapTime(target);
      setTimeLeft(timeLeft);
      if (timeLeft <= 0) {
        clearInterval(timer);
      }
    }, options.updateFrequency);

    return () => clearInterval(timer);
  }, [target, paused, options.updateFrequency]);

  const data = useMemo(() => parseLeft(timeLeft), [timeLeft]);

  return {
    data: {
      ...data,
      left: timeLeft
    },
    stop: () => setPaused(true),
    start: () => setPaused(false),
    setTarget: setTargetDate
  };
}

export {
  useCountdown,
  IDate
}