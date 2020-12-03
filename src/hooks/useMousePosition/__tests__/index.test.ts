import { act, renderHook } from '@testing-library/react-hooks';
import { useMousePosition } from '../index';

const mouseMove = (x: number, y: number) => {
  act(() => {
    document.dispatchEvent(
      new MouseEvent('mousemove', {
        clientX: x,
        clientY: y,
        screenX: x,
        screenY: y,
      }),
    );
  });
}

describe('useMousePosition', () => {
  it('should be defined', () => {
    expect(useMousePosition).toBeDefined();
  });

  it('should change the result while mouse moving', () => {
    const hook = renderHook(() => useMousePosition());

    expect(hook.result.current.pageX).toBe(NaN);
    expect(hook.result.current.pageY).toBe(NaN);
    expect(hook.result.current.clientX).toBe(NaN);
    expect(hook.result.current.clientY).toBe(NaN);
    expect(hook.result.current.screenX).toBe(NaN);
    expect(hook.result.current.screenY).toBe(NaN);

    mouseMove(100, 200);
    expect(hook.result.current.clientX).toBe(100);
    expect(hook.result.current.clientY).toBe(200);
    expect(hook.result.current.screenX).toBe(100);
    expect(hook.result.current.screenY).toBe(200);
  });
});