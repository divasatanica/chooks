# useMount

A hook that will execute the specified callback when the component mounted.

## Examples

### Default usage

```typescript jsx
import React from 'react';
import { useMount } from '@vergiss/chooks';

export default () => {
  useMount(() => console.log('Mounted'));
  return (
    <span>Hello world</span>
  )
}
```

## API

```typescript
useMount(
  callback: (...args: any[]) => any
)
```

### Params
| Property     | Description                  | Type                                     | Default |
| ------------ | ---------------------------- | ---------------------------------------- | ------- |
| callback | Necessary | `function` | - |