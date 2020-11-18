# useLocalStorage

A hook that read and write localStorage with defaultValue, which supports automatic JSON serialization and deserialization.

## Examples

### Default usage
```typescript jsx
import React from 'react';
import { useLocalStorage } from '@vergiss/chooks';

export default () => {
  // Note that the reference type variable with be transformed into JSON string.
  const [storage, setStorage] = useLocalStorage('test-storage', {});
  const onStorageInputChange = e => {
    setStorage(e.target.value);
  }

  return (
    <>
      <input onChange={onStorageInputChange}></input>
      <span>Storage Value: {storage}</span>
    </>
  )
}
```

### Advanced usage
```typescript jsx
import React from 'react';
import { useLocalStorage } from '@vergiss/chooks';

export default () => {
  // Use localStorage with expiration time
  const [storage, setStorage] = useLocalStorage('test-storage', '', { expireAge: 2000 });
  const onStorageInputChange = e => {
    setStorage(e.target.value);
  }

  return (
    <>
      <input onChange={onStorageInputChange}></input>
      <span>Storage Value: {storage}</span>
    </>
  )
}
```

## API
```typescript
const [storage, setStorage] = useLocalStorage(
  key: string,
  defaultValue: any,
  options?: { expireAge: number }
)
```

### Params
| Property     | Description                  | Type                                     | Default |
| ------------ | ---------------------------- | ---------------------------------------- | ------- |
| key | Necessary, storage key | `string` | - |
| defaultValue | Necessary, default value for storage | `any` | - |
| options.expireAge | Optional, which specify the storage's expiration time and zero for no expiration time | `number` | 0 |

### Result

| Property | Description   | Type    |
| -------- | ------------- | ------- |
| storage | Storage value | any |
| setStorage | A storage updater| `Action` |
