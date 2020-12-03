import { act, renderHook } from '@testing-library/react-hooks';
import { useDebounce } from '../index';
import { sleep } from '../../../utils/tools';

let count = 0;
const debounceFn = (gap: number) => count += gap;

const setUp = (fn: (...args: any[]) => any, delay: number) => renderHook(() => useDebounce(fn, delay));

describe('useDebounce', () => {
  it('should be defined', () => {
    expect(useDebounce).toBeDefined();
  });

  it('should cancel the pre call if it\'s be invoked with delay time', async () => {
    const hook = setUp(debounceFn, 200);

    await act(async () => {
      hook.result.current(2);
      hook.result.current(2);
      hook.result.current(3);
      expect(count).toBe(0);
      await sleep(300);
      expect(count).toBe(3);
      hook.result.current(4);
      await sleep(100);
      expect(count).toBe(3);
      await sleep(150);
      expect(count).toBe(7);
    });
  })
});