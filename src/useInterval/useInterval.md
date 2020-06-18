# useInterval

```jsx
import { useInterval } from '@ttrmz/react-utils'
```

## Usage

```jsx
const Example = () => {
  const [count, setCount] = React.useState(0)

  useInterval(() => {
    setCount(count + 1)
  }, 1000)

  return <p>{count}</p>
}
```

## Parameters

| Name     | Description       | Type     |
| -------- | ----------------- | -------- |
| callback | callback function | Function |
| delay    | interval delay    | Number   |
