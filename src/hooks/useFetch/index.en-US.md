# useFetch

A hook that fetch data from remote source.

## Examples

### Default usage

```typescript jsx
import React from 'react';
import { useFetch } from '@vergiss/chooks';

const getData = () => {
  return new Promise(r => {
    setTimeout(() => {
      r({name: 'coma', age: 15 + Math.round(Math.random() * 15) })
    }, 1000);
  })
};

export function Fetch() {
  const _getData = useCallback(() => {
    return getData(params);
  }, [getData]);
  const { result, loading } = useFetch(_getData);
  if (loading) {
    return <p>Loading.....</p>
  }
  return (
    <div>
      <p>name: { result.name }</p>
      <p>age: { result.age }</p>
      <p>page: { page }</p>
    </div>
  )
}
```

## API
```typescript

const { result, loading, status } = useFetch(
  service: () => PromiseLike<any>
);
```

### Params
| Property     | Description                  | Type                                     | Default |
| ------------ | ---------------------------- | ---------------------------------------- | ------- |
| service | Necessary, a function that return a promise | `function` | - |

### Result

| Property | Description   | Type    |
| -------- | ------------- | ------- |
| result    | Data Result | `Any` |
| status    | Status | `String` |
| loading    | Is in loading | `Boolean` |