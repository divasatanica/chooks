function getUrlParams(name: string, location: string = window.location.href): {[x: string]: string} | null | string {
  if (!location) {
    return null;
  }
  const query = location.split('?')[1];

  if (!query) {
    return null;
  }

  const params = {};
  query.split('&').forEach(pair => {
    const [name, val] = pair.split('=');

    params[name] = val;
  });

  if (name) {
    return params[name];
  }

  return params;
}

function parseJson(str: string, emptyValueType?: string): unknown {
  try {
    return JSON.parse(str);
  } catch (e) {
    if (!emptyValueType || emptyValueType === 'object') {
      return {};
    }
    return '';
  }
}

function debounce(fn: (...args: unknown[]) => unknown, delay: number, thisValue?: unknown): (...args: unknown[]) => unknown {
  let timer: number;

  return function debouncedFunction(...args: unknown[]) {
    if (timer) {
      window.clearTimeout(timer);
    }

    timer = window.setTimeout(() => {
      fn.apply(thisValue || this, args);
    }, delay);
  }
}

export {
  getUrlParams,
  parseJson,
  debounce
};