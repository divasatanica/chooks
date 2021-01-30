import { act, renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../index';
import { sleep } from '../../../utils/tools';

const service = () => {
  return new Promise(r => {
    setTimeout(() => {
      r({name: 'coma', age: 24 })
    }, 100);
  })
};
const setUp = (service: (...args: any[]) => PromiseLike<any>) => renderHook(() => useFetch(service));


describe('useDebounce', () => {
  it('should be defined', () => {
    expect(useFetch).toBeDefined();
  });

  it('should fetch remote data', async () => {
    const hook = setUp(service);

    await act(async () => {
      expect(hook.result.current.loading).toBeTruthy();
      await sleep(200);
      expect(hook.result.current.result).toEqual({ name: 'coma', age: 24 });
    });
  })
});