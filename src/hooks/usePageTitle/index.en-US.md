# usePageTitle

A hook that change the document's title.

## Examples

### Default usage

```typescript jsx
import React from 'react';
import { usePageTitle } from '@vergiss/chooks';

function PageTitle() {
  usePageTitle('Hello World');

  return (
    <span>
      This page's title is Hello World
    </span>
  )
}
```

### Advanced usage

```typescript  jsx
import React from 'react';
import { usePageTitle } from '@vergiss/chooks';

function PageTitle() {
  // note that the `preservePreTitle` option set to false will
  // cause the hook never store the page's title before.
  usePageTitle('Hello World', { preservePreTitle: false });

  return (
    <span>
      This page's title is Hello World
    </span>
  )
}
```

## API
```typescript
usePageTitle(
  title: string,
  options?: {
    preservePreTitle: boolean
  }
)
```

### Params
| Property     | Description                  | Type                                     | Default |
| ------------ | ---------------------------- | ---------------------------------------- | ------- |
| title | Necessary | `string` | - |
| options.preservePreTitle | Optional | `boolean` | true |