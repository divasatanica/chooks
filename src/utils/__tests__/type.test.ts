import * as types from '../type';

describe('Type Utils', () => {
  describe('isArray', () => {
    it('should return true', () => {
      expect(types.isArray([])).toBe(true);
    });
    it('should return false', () => {
      expect(types.isArray(void 0)).toBe(false);
      expect(types.isArray('str')).toBe(false);
    });
  });

  describe('isDate', () => {
    it('should return true', () => {
      expect(types.isDate(new Date())).toBe(true);
    });
    it('should return false', () => {
      expect(types.isDate('str')).toBe(false);
      expect(types.isDate(0xfff)).toBe(false);
    });
  });

  describe('isFloat', () => {
    it('should return true', () => {
      expect(types.isFloat(2.5)).toBe(true);
    });
    it('should return false', () => {
      expect(types.isFloat(3)).toBe(false);
      expect(types.isFloat('str')).toBe(false);
    });
  });

  describe('isFunction', () => {
    it('should return true', () => {
      expect(types.isFunction(console.log)).toBe(true);
    });
    it('should return false', () => {
      expect(types.isFunction({})).toBe(false);
      expect(types.isFunction([])).toBe(false);
    });
  });

  describe('isInt', () => {
    it('should return true', () => {
      expect(types.isInt(10)).toBe(true);
    });
    it('should return false', () => {
      expect(types.isInt(2.5)).toBe(false);
      expect(types.isInt('str')).toBe(false);
    });
  });

  describe('isNull', () => {
    it('should return true', () => {
      expect(types.isNull(null)).toBe(true);
    });
    it('should return false', () => {
      expect(types.isNull(10)).toBe(false);
      expect(types.isNull('0')).toBe(false);
    });
  });

  describe('isNumber', () => {
    it('should return true', () => {
      expect(types.isNumber(100)).toBe(true);
    });
    it('should return false', () => {
      expect(types.isNumber('100')).toBe(false);
      expect(types.isNumber([])).toBe(false);
    });
  });

  describe('isObject', () => {
    it('should return true', () => {
      expect(types.isObject({})).toBe(true);
    });
    it('should return false', () => {
      expect(types.isObject('100')).toBe(false);
    expect(types.isObject(100)).toBe(false);
    });
  });

  describe('isString', () => {
    it('should return true', () => {
      expect(types.isString('Hello World')).toBe(true);
    });
    it('should return false', () => {
      expect(types.isString(0x10)).toBe(false);
      expect(types.isString({})).toBe(false);
    });
  });
  
});