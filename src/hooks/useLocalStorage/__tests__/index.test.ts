import { act, renderHook } from '@testing-library/react-hooks';
import { useLocalStorage } from '../index';

let mockTimestamp = 0;
jest.spyOn(Date, 'now').mockImplementation(() => mockTimestamp);

describe('useLocalStorage', () => {
  it('should be defined', () => {
    expect(useLocalStorage).toBeDefined();
  });

  it('should set a value to localStorage', () => {
    const key = 'test';
    const hook = renderHook(() => useLocalStorage(key, 'hello'));
    const [storage] = hook.result.current;

    expect(storage).toBe('hello');
    expect(global.window.localStorage.getItem(key)).toBe('"hello"')
  });

  it('should update the storage', () => {
    const key = 'test';
    const hook = renderHook(() => useLocalStorage(key, 'hello'));

    expect(hook.result.current[0]).toBe('hello');
    expect(global.window.localStorage.getItem(key)).toBe('"hello"')
    act(() => {
      hook.result.current[1]('world');
    });
    expect(hook.result.current[0]).toBe('world');
    expect(global.window.localStorage.getItem(key)).toBe('"world"');
  });

  it('should get empty value after expiration age', () => {
    const key = 'text-expiration';
    const hook = renderHook(() => useLocalStorage(key, 'value', { expireAge: 2000 }));

    expect(hook.result.current[0]).toBe('value');
    expect(global.window.localStorage.getItem(key)).toBe('"value"');
    act(() => {
      mockTimestamp += 2300;
      hook.rerender();
    });
    expect(hook.result.current[0]).toBe(null);
    expect(global.window.localStorage.getItem(key)).toBe(null);
  });
});