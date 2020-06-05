# useLocalStorage

> Similar to useState but first arg is key to the value in local storage.

## Usage

```jsx
import React from 'react'

import { useLocalStorage } from '@ttrmz/react-utils'

const Example = () => {
  const [value, setValue] = useLocalStorage('key', 'initialValue')

  return <input value={value} onChange={(e) => setName(e.target.value)} />
}
```

## Parameters

| Name          | Description                 | Type   |
| ------------- | --------------------------- | ------ |
| key           | local storage key           | String |
| initial value | local storage initial value | Any    |
