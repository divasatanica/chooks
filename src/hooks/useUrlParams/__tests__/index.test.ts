import { act, renderHook } from '@testing-library/react-hooks';
import { useUrlParams } from '../index';

describe('useUrlParams', () => {
  it('should be defined', () => {
    expect(useUrlParams).toBeDefined();
  });

  it('should return params value', () => {
    Object.defineProperty(window, "location", {
        value: {
          href: 'https://localhost'
        },
        writable: true
    });
    window.location.href = 'https://www.example.com?hello=world';

    const hook = renderHook(() => useUrlParams('hello'));
    expect(hook.result.current).toBe('world');
    act(() => {
      window.location.href = 'https://www.example.com?hello=coma';
      hook.rerender();
    });
    expect(hook.result.current).toBe('coma');
  });
});