# stopEvent

```jsx
import { stopEvent } from '@ttrmz/react-utils'
```

## Usage

```jsx
const Example = () => {
  const handleClick = event => {
      stopEvent(event)

      ...
  }

  return <button onClick={handleClick} />
}
```
