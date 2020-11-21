import { act, renderHook } from '@testing-library/react-hooks';
import { useCountdown } from '../index';

jest.spyOn(Date, 'now').mockImplementation(() => new Date(2020, 10, 20, 18).getTime());

const init = (target: string | number | Date) => {
  return renderHook(target => useCountdown(target), { initialProps: target });
}

describe('useCountdown', () => {
  jest.useFakeTimers();
  it('should be defined', () => {
    expect(useCountdown).toBeDefined();
  });

  it('should return correctly', async () => {
    const { result } = init(new Date(Date.now() + 1000 * 60));
    const { data: { day, hour, min, sec }, stop, start } = result.current;
    expect(stop).toBeDefined()
    expect(start).toBeDefined()
    expect(day).toBe(0);
    expect(hour).toBe(0);
    expect(min).toBe(1);
    expect(sec).toBe(0);
  });

  it('should work automatically', () => {
    const { result } = init(new Date(Date.now() + 1000 * 60));
    act(() => {
      console.log(result.current);
      jest.advanceTimersByTime(2000);
      console.log(result.current);
      expect(result.current.data.min).toBeLessThanOrEqual(0);
      expect(result.current.data.sec).toBeLessThanOrEqual(58);
    });
  });
});