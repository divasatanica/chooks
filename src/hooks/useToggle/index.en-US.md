# useToggle

A hook that return a boolean value and a toggle method.

## Examples

### Default usage

```typescript jsx
import React, { useState, useEffect } from 'react';
import { useToggle } from '@vergiss/chooks';

export default function ToggleBackground() {
  const [isNight, toggleIsNight] = useToggle(false);

  useEffect(() => {
    const appHeader = document.getElementById('app-header');
    if (isNight) {
      appHeader.style.backgroundColor = '#282c34';
      appHeader.style.color= '#fff';
    } else {
      appHeader.style.backgroundColor = '#fff';
      appHeader.style.color= '#333';
    }
  }, [isNight]);

  return (
    <div>
      <button onClick={toggleIsNight}>切换</button>
    </div>
  )
} 
```

## API

```typescript
const [state, toggle] = useToggle(
  initialValue: boolean
);
```

### Params
| Property     | Description                  | Type                                     | Default |
| ------------ | ---------------------------- | ---------------------------------------- | ------- |
| initialValue | Necessary | `boolean` | - |

### Result
| Property | Description   | Type    |
| -------- | ------------- | ------- |
| state | State value | `Boolean` |
| toggle | Toggle function | `Function` |