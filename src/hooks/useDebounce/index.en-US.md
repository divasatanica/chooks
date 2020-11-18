# useDebounce

A hook-version debounce util function.

## Examples

### Default usage
```typescript jsx
import React, { useState } from 'react';
import { useDebounce } from '@vergiss/chooks';

export default () => {
  const [val, setVal] = useState('');
  const onValChange = useDebounce(setVal, 300);

  return (
    <div>
      <input onChange={onValChange} />
      <span>Value: {val}</span>
    </div>
  )
}
```

## API
```typescript
const debounced = useDebounce(
  callback: (...args: any[]) => any,
  delay: number
)
```

### Params
| Property     | Description                  | Type                                     | Default |
| ------------ | ---------------------------- | ---------------------------------------- | ------- |
| callback | Necessary | `function` | - |
| delay | Necessary，delay time| `number` | - |

### Result

| Property | Description   | Type    |
| -------- | ------------- | ------- |
| debounced   | Debounced function | Function |

