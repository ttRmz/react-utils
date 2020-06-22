# useTimeout

```jsx
import { useTimeout } from '@ttrmz/react-utils'
```

## Usage

```jsx
const Example = () => {
  const { start, stop, pending } = useTimeout(() => window.alert('Timeout !'))

  return (
    <div>
      <button onClick={pending ? stop : start}>
        {pending ? 'stop' : 'start'}
      </button>

      <p>{pending ? 'loading...' : 'done !'} </p>
    </div>
  )
}
```

## Parameters

| Name     | Description                            | Type     |
| -------- | -------------------------------------- | -------- |
| callback | callback function called on timeout    | Function |
| delay    | timeout delay (default value : _3000_) | Number   |

## Returned object

| Key     | Type     |
| ------- | -------- |
| start   | Function |
| stop    | Function |
| pending | Boolean  |
