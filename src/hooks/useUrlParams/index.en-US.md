# useUrlParams

A hook that return url param or calculated value from it.

## Examples

### Default usage

```typescript jsx
import React from 'react';
import { useUrlParams } from '@vergiss/chooks';

export default () => {
  const sourecFrom = useUrlParams('source-from');

  return (
    <span>
      { sourceFrom }
    </span>
  )
}
```

### Advanced usage

```typescript jsx
import React from 'react';
import { useUrlParams } from '@vergiss/chooks';

export default () => {
  const isFromIndex = useUrlParmas('source-from', sourceFrom => sourceFrom === 'index');

  return (
    <span>
      { isFromIndex ? 'yes': 'no' }
    </span>
  )
}
```

## API

```typescript
const value = useUrlParams(
  paramName: string
)
```

```typescript
const calculatedValue = useUrlParams(
  paramName: string,
  calculator: (value: any) => any
)
```

### Params
| Property     | Description                  | Type                                     | Default |
| ------------ | ---------------------------- | ---------------------------------------- | ------- |
| paramName | Necessary | `string` | - |
| calculator | Optional, a calculator function | `function` | - |

