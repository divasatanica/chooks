# useHover

A hook that return a state referred to whether a element presented by the ref param is hovering by mouse.

## Examples

### Default usage
```typescript jsx
import React, { useRef } from 'react'
import { useHover } from '@vergiss/chooks';

export default () => {
  const ref = useRef(null);
  const isHovering = useHover(ref);

  return (
    <div ref={ref}>
      { isHovering ? 'yes' : 'no' }
    </div>
  )
}
```

## API
```typescript
const isHovering = useHover(
  ref: React.RefObject<HTMLElement>
)
```

### Params
| Property     | Description                  | Type                                     | Default |
| ------------ | ---------------------------- | ---------------------------------------- | ------- |
| ref | Necessary, a ref object referred to an element | `React.RefObject` | - |

### Result

| Property | Description   | Type    |
| -------- | ------------- | ------- |
| isHovering | Hovering status | Boolean |