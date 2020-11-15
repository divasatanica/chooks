function getType(target: any): string {
  return Object.prototype.toString.call(target).slice(8, -1);
}

function isArray(target: any): target is Array<any> {
  return getType(target) === 'Array';
}

function isFunction(target: any): target is (...args: any[]) => any {
  return getType(target) === 'Function';
}

function isObject(target: any): target is Record<string, unknown> {
  return getType(target) === 'Object';
}

function isString(target: any): target is string {
  return getType(target) === 'String';
}

function isNumber(target: any): target is number {
  return getType(target) === 'Number';
}

function isInt(target: any): target is number {
  return isNumber(target) && (target.toString().indexOf('.') < 0);
}

function isFloat(target: any): target is number {
  return isNumber(target) && (target.toString().indexOf('.') > -1);
}

function isNull(target: any): target is null {
  return getType(target) === 'Null';
}

function isDate(target: any): target is Date {
  return getType(target) === 'Date';
}

export {
  getType,
  isNumber,
  isInt,
  isFloat,
  isArray,
  isFunction,
  isNull,
  isObject,
  isString,
  isDate
}