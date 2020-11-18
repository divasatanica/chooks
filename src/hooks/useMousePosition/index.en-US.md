# useMousePosition

A hook that return the mouse position data whose initial value is NaN.

## Examples

```typescript jsx
import React from 'react';
import { useMousePosition } from '@vergiss/chooks';

export default () => {
  const { clientX, clientY, pageX, pageY, screenX, screenY } = useMousePosition();

  return (
    <div>
      MousePosition, X: {isNaN(clientX) ? 0 : clientX}, Y: {isNaN(clientY) ? 0 : clientY}
    </div>
  )
}
```

## API

```typescript
const { clientX, clientY, pageX, pageY, screenX, screenY } = useMousePosition();
```

### Result


| Property | Description   | Type    |
| -------- | ------------- | ------- |
| clientX | Mouse event clientX | `Number` |
| clientY | Mouse event clientY | `Number` |
| pageX | Mouse event pageX | `Number` |
| pageY | Mouse event pageY | `Number` |
| screenX | Mouse event screenX| `Number` |
| screenY | Mouse event screenY | `Number` |
