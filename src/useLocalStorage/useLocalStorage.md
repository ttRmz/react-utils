# useLocalStorage

> Similar to useState but first arg is key to the value in local storage.

```jsx
import { useLocalStorage } from '@ttrmz/react-utils'
```

## Usage

```jsx
const Example = () => {
  const [value, setValue] = useLocalStorage('key', 'initialValue')

  return <input value={value} onChange={(e) => setValue(e.target.value)} />
}
```

## Parameters

| Name          | Description                 | Type   |
| ------------- | --------------------------- | ------ |
| key           | local storage key           | String |
| initial value | local storage initial value | Any    |
