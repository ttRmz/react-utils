# useInput

```jsx
import { useInput } from '@ttrmz/react-utils'
```

## Usage

```jsx
const Example = () => {
  const { value, onChange } = useInput('')

  return <input value={value} onChange={onChange} />
}
```

## Parameters

| Name         | Description            | Type   |
| ------------ | ---------------------- | ------ |
| defaultValue | default value of input | String |

## Returned object

| Key      | Type     |
| -------- | -------- |
| value    | String   |
| setValue | Function |
| onChange | Function |
| hasValue | Boolean  |
| clear    | Function |
