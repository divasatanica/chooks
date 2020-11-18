# useMount

A hook that will execute the specified callback when the component unmounted.

## Examples

### Default usage

```typescript jsx
import React from 'react';
import { useUnmount } from '@vergiss/chooks';

export default () => {
  useUnmount(() => console.log('Mounted'));
  return (
    <span>Hello world</span>
  )
}
```

## API

```typescript
useUnmount(
  callback: (...args: any[]) => any
)
```

### Params
| Property     | Description                  | Type                                     | Default |
| ------------ | ---------------------------- | ---------------------------------------- | ------- |
| callback | Necessary | `function` | - |