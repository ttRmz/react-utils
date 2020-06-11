# useDebounce

## Usage

```jsx
import React from 'react'

import { useDebounce, useInput } from '@ttrmz/react-utils'

const Example = () => {
  const { value, onChange } = useInput('')

  const debouncedValue = useDebounce(value, 500)

  return (
    <div>
      <input value={value} onChange={onChange} />

      <p>debounced value (500ms) : {debouncedValue}</p>
    </div>
  )
}
```

## Parameters

| Name         | Description    | Type   |
| ------------ | -------------- | ------ |
| initialValue |                | Any    |
| delay        | debounce delay | Number |
