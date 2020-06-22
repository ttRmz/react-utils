# debounce

```jsx
import { debounce } from '@ttrmz/react-utils'
```

## Usage

```jsx
const handler = debounce(() => {
  // your logic here
}, 250)

window.addEventListener('resize', handler)
```

## Parameters

| Name     | Type     |
| -------- | -------- |
| callback | Function |
| delay    | Number   |
