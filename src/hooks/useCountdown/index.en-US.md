# useCountdown

A hook that return the gap time between target date which will be updated with a specified update frequency and stop/start method to control the countdown.

## Examples

### Default usage

```typescript jsx
import React from 'react';
import { useCountdown } from '@vergiss/chooks';

export function CountdownWithDateObject() {
  const { data: { day, hour, min, sec }, stop, start } = useCountdown(new Date(2020, 10, 17));

  return (
    <div>
      Countdown: {day}:{hour}:{min}:{sec}
      <button onClick={stop}>Pause</button>
      <button onClick={start}>Resume</button>
    </div>
  )
}

export function CountdownWithValidDateString() {
  const { data: { day, hour, min, sec }, stop, start } = useCountdown('2020-11-17');

  return (
    <div>
      Countdown: {day}:{hour}:{min}:{sec}
      <button onClick={stop}>Pause</button>
      <button onClick={start}>Resume</button>
    </div>
  )
}

export function CountdownWithTimestamp() {
  const { data: { day, hour, min, sec }, stop, start } = useCountdown(new Date(2020, 10, 17).getTime());

  return (
    <div>
      Countdown: {day}:{hour}:{min}:{sec}
      <button onClick={stop}>Pause</button>
      <button onClick={start}>Resume</button>
    </div>
  )
}
```

### Advanced usage

```typescript jsx
import React from 'react';
import { useCountdown } from '@vergiss/chooks';

export default function CountdownWithDateObject() {
  // return a countdown data which will update every 2 seconds
  const { data: { day, hour, min, sec }, stop, start } = useCountdown(new Date(2020, 10, 17), { updateFrequency: 2000 });

  return (
    <div>
      Countdown: {day}:{hour}:{min}:{sec}
      <button onClick={stop}>Pause</button>
      <button onClick={start}>Resume</button>
    </div>
  )
}
```

## API
```typescript
interface IUseCountdownOption {
  updateFrequency?: number;
}
const { data, start, stop } = useCountdown(
  target: number|string|Date,
  options?: IUseCountdownOption = { updateFrequency: 1000 }
);
```

### Params
| Property     | Description                  | Type                                     | Default |
| ------------ | ---------------------------- | ---------------------------------------- | ------- |
| targetDate | Optional，set a target value | `number` \| `string` \| `Date` | - |
| options | Optional，set Options | `object` | `{ updateFrequency: 1000 }` |

### Result

| Property | Description   | Type    |
| -------- | ------------- | ------- |
| data.day    | Countdown days | `Number` |
| data.hour  | Countdown hours | `Number` |
| data.min    | Countdown mins | `Number` |
| data.sec  | Countdown secs | `Number` |
| data.left | Countdown millsecs | `Number`|
| stop  | A method to pause the interval | `Function` |
| start  | A method to resume the interval | `Function` |
| setTarget | A method to set new target | `Function` |