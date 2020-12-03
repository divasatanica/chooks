import { renderHook, act } from '@testing-library/react-hooks';
import { useToggle } from '../index';

const callToggle = (hook: any) => {
  act(() => {
    hook.result.current[1]();
  });
};

describe('useToggle', () => {
  it('should be defined', () => {
    expect(useToggle).toBeDefined();
  });

  it('test on init', async () => {
    const hook = renderHook(() => useToggle(false));
    expect(hook.result.current[0]).toBeFalsy();
  });

  it('test on methods', async () => {
    const hook = renderHook(() => useToggle(false));
    expect(hook.result.current[0]).toEqual(false);
    callToggle(hook)
    expect(hook.result.current[0]).toEqual(true);
    callToggle(hook);
    expect(hook.result.current[0]).toEqual(false);
  })
});