# useInView

A hook that return a state referred to whether the element is in viewport

## Examples

### Default usage
```typescript jsx
import React, { useRef } from 'react'
import { useInView } from '@vergiss/chooks';

export default () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref}>
      { isInView ? 'yes' : 'no' }
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
| isInView | Whether the element is in viewport | `Boolean` |