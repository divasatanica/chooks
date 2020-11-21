import { renderHook } from '@testing-library/react-hooks';
import { useChangedProps } from '../index';

describe('useChangedProps', () => {
  it('should be defined', () => {
    expect(useChangedProps).toBeDefined();
  });

  it('should invoke callback', () => {
    let props = { name: 'coma' };
    const callback = jest.fn().mockReturnValue(void 0);
    const hook = renderHook(() => useChangedProps<any>(props, callback), { initialProps: props });
    props = { name: 'cc' }
    hook.rerender();
    expect(callback).toBeCalledTimes(1);
  });

  it('should not invoke callback', () => {
    const props = { name: 'coma' }
    const callback = jest.fn().mockReturnValue(void 0);
    const hook = renderHook(() => useChangedProps<any>(props, callback), { initialProps: props });
    hook.rerender();
    expect(callback).toBeCalledTimes(0);
  })
});