import { act, renderHook } from '@testing-library/react-hooks';
import { usePageTitle } from '../index';

describe('usePageTitle', () => {
  it('should be defined', () => {
    expect(usePageTitle).toBeDefined();
  });

  it(`should change document's title and restore while unmounting`, () => {
    global.window.document.title = 'Hello';
    const hook = renderHook(() => usePageTitle('Hello World'));
    expect(global.window.document.title).toBe('Hello World');
    act(() => {
      hook.unmount();
    });
    expect(global.window.document.title).toBe('Hello');
  });
});
