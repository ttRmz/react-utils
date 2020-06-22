# useCursorPosition

```jsx
import { useCursorPosition } from '@ttrmz/react-utils'
```

## Usage

```jsx
const Example = () => {
  const { x, y } = useCursorPosition()

  return (
    <div>
      <span>x position : {x}</span>
      <span>y position : {y}</span>
    </div>
  )
}
```

## Returned object

| Key | Type   |
| --- | ------ |
| x   | Number |
| y   | Number |
