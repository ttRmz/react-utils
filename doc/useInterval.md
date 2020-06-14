# useInterval

## Usage

```jsx
import React from 'react'

import { useInterval } from '@ttrmz/react-utils'

const Example = () => {
  const [count, setCount] = useState(0)

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
