# useChangedProps

A hook that will execute the callback with previous and present props as arguments after they changed.

# Examples

### Default Usage

```typescript jsx
/**
 * Desc: Do some immutable operation after props changed
 */

import React from 'react';
import { useChangedProps } from '@vergiss/chooks';

interface IProps {
  title: string
}

export default (props: IProps) => {
  useChangedProps((prevProps: IProps, props: IProps) => {
    console.log('Old Props:', prevProps, 'New Props:', props);
  });

  return (
    <div>
      <span>Props.title is: {props.title}</span>
    </div>
  )
}
```

## API

```typescript
useChangedProps(
  callback: (prevProps: IProps, props: IProps) => any
);
```

### Params
| Property     | Description                  | Type                                     | Default |
| ------------ | ---------------------------- | ---------------------------------------- | ------- |
| callback | Necessary，define a callback the use the prev and present props | `function` | - |