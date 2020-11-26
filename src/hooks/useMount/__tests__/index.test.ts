import { act, renderHook } from '@testing-library/react-hooks';
import { useMount } from '../index';

describe('useMount', () => {
  it('should be defined', () => {
    expect(useMount).toBeDefined();
  });

  it('should invoke the callback only once', () => {
    const callback = jest.fn();
    const hook = renderHook(() => useMount(callback));
    expect(callback).toBeCalledTimes(1);
    act(() => {
      hook.rerender();
    });
    expect(callback).toBeCalledTimes(1);
    act(() => {
      hook.unmount();
    });
    expect(callback).toBeCalledTimes(1);
  });
});