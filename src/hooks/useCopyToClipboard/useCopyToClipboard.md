# useCopyToClipboard

```jsx
import { useCopyToClipboard } from '@ttrmz/react-utils'
```

## Usage

```jsx
const Example = () => {
  const { value, onChange } = useInput('')
  const { copy, copied, error } = useCopyToClipboard(1000) // copied and error states will be reset after 1000 ms

  return (
    <div>
      <input value={value} onChange={onChange} />

      <button onClick={() => copy(value)}>{copied ? 'Copied' : 'Copy'}</button>

      {error && <span>Failed to copy</span>}
    </div>
  )
}
```

## Parameters

| Name            | Description                         | Type   |
| --------------- | ----------------------------------- | ------ |
| successDuration | timeout delay (default value : _0_) | Number |

## Returned object

| Key    | Type     |
| ------ | -------- |
| copied | Boolean  |
| copy   | Function |
| error  | Boolean  |
