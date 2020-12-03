import { act, renderHook } from '@testing-library/react-hooks';
import { useCountdown, IDate } from '../index';

const init = (target?: IDate) => renderHook(target => useCountdown(target), { initialProps: target });
describe('useCountdown', () => {
  beforeEach(() => {
    jest.useFakeTimers('modern');
  });
  
  it('should be defined', () => {
    expect(useCountdown).toBeDefined();
  });
  
  it('should initialize correctly with undefined targetDate', () => {
    const { result } = init();

    const { data, stop, start, setTarget } = result.current;

    expect(data.left).toBe(0);
    expect(typeof stop).toBe('function');
    expect(typeof start).toBe('function');
    expect(typeof setTarget).toBe('function');
    expect(data).toEqual({
      day: 0,
      hour: 0,
      min: 0,
      sec: 0,
      left: 0,
    });
  });

  it('should return correctly', async () => {
    const { result } = init(new Date(Date.now() + 1000 * 5));
    const { stop, start } = result.current;
    expect(stop).toBeDefined()
    expect(start).toBeDefined()
    expect(result.current.data.day).toBe(0);
    expect(result.current.data.hour).toBe(0);
    expect(result.current.data.min).toBe(0);
    expect(result.current.data.sec).toBeLessThanOrEqual(5);
  });

  it('should work automatically', () => {
    const { result } = init(new Date(Date.now() + 1000 * 10));

    expect(result.current.data.min).toBeLessThanOrEqual(0);
    expect(result.current.data.left).toBeLessThanOrEqual(10000);
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(result.current.data.left).toBeLessThanOrEqual(8000);
    expect(result.current.data.sec).toBeLessThanOrEqual(8);
  });
});