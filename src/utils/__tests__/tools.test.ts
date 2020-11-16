import * as tools from '../tools';

describe('Tools', () => {
  describe('parseJson', () => {
    const parseJson = tools.parseJson;

    it('should return correct object', () => {
      const res = (parseJson('{"name": "coma", "age": 21}') as any);

      expect(res.name).toBe('coma');
      expect(res.age).toBe(21);
    });

    it('should return empty object without the second param or `object` when error', () => {
      const res = (parseJson('{"nam') as any);

      expect(Object.keys(res).length).toBe(0);
    });

    it('should return empty strikng without the second param valued `string` when error', () => {
      const res = (parseJson('{"nam', 'string') as any);

      expect(res).toBe('');
    });
  });

  describe('sleep', () => {
    const sleep = tools.sleep;

    it('should return a Promise', () => {
      const r = sleep(100);

      expect(r.constructor).toBe(Promise);
      expect(typeof r.then).toBe('function');
    });

    it('should await `delay` ms', async () => {
      const now = Date.now();
      await sleep(500);
      expect(Date.now() - now - 500).toBeLessThanOrEqual(30);
    });
  });

  describe('debounce', () => {
    const debounce = tools.debounce;

    it('should return a function', () => {
      expect(typeof debounce(console.log, 100)).toBe('function');
    });

    it('should wait until delay without further call', async () => {
      let a = 1;
      const b = debounce((x: number) => a += x, 300);

      b(2);
      setTimeout(() => {
        b(3);
        setTimeout(() => {
          expect(a).toBe(4);
        }, 400);
      }, 200);
    });
  });

  describe('getUrlParams', () => {
    const getUrlParams = tools.getUrlParams;

    it('should return value with a name', () => {
      const res = getUrlParams('key', 'https://www.example.com?key=123');

      expect(res).toBe('123');
    });

    it('should return an object without name', () => {
      const res = getUrlParams('', 'https://www.example.com?key=123&name=hajo') as any;

      expect(typeof res).toBe('object');
      expect(Object.keys(res).length).toBe(2);
      expect(res.key).toBe('123');
      expect(res.name).toBe('hajo');
    })
  })
});