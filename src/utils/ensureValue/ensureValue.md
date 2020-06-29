# ensureValue

> Return a fallback value if the given one is either null, NaN or undefined

```jsx
import { ensureValue } from '@ttrmz/react-utils'
```

## Usage

```jsx
ensureValue() // null
ensureValue(null) // null
ensureValue(undefined) // null

ensureValue(false, 1) // false
ensureValue(0, 2)) // 0
ensureValue('', 'test') // ''

ensureValue(undefined, 'test') // test
ensureValue(NaN, 0) // 0
ensureValue(null, 123) // 123

ensureValue({}, []) // {}
ensureValue([], []) // []
```

## Parameters

| Name     | Type |
| -------- | ---- |
| value    | Any  |
| fallback | Any  |
