# useInput

## Usage

```jsx
import React from 'react'

import { useInput } from '@ttrmz/react-utils'

const Example = () => {
  const { value, onChange } = useInput('')

  return <input value={value} onChange={onChange} />
}
```

## Parameters

| Name         | Description            | Type   |
| ------------ | ---------------------- | ------ |
| defaultValue | default value of input | String |

## Returned value (_object_)

Properties:

| Key      | Type     |
| -------- | -------- |
| value    | String   |
| setValue | function |
| onChange | function |
| hasValue | boolean  |
| clear    | function |
