import { act, renderHook } from '@testing-library/react-hooks';
import { useUnmount } from '../index';

describe('useUnmount', () => {
  it('should be defined', () => {
    expect(useUnmount).toBeDefined();
  });

  it('should invoke the callback only once', () => {
    const callback = jest.fn();
    const hook = renderHook(() => useUnmount(callback));
    expect(callback).toBeCalledTimes(0);
    act(() => {
      hook.rerender();
    });
    expect(callback).toBeCalledTimes(0);
    act(() => {
      hook.unmount();
    });
    expect(callback).toBeCalledTimes(1);
  });
});