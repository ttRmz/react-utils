# useOnClickOutside

```jsx
import { useOnClickOutside } from '@ttrmz/react-utils'
```

## Usage

```jsx
const Example = () => {
  const element = React.useRef()

  const [outside, setOutside] = React.useState(false)

  useOnClickOutside(element, () => setOutside(true))

  return (
    <div>
      <div
        onClick={() => setOutside(false)}
        style={{ height: 56, width: 56, background: 'blue' }}
        ref={element}
      />

      <p>clicked outside : {outside ? 'yes' : 'no'}</p>
    </div>
  )
}
```

## Parameters

| Name     | Description       | Type     |
| -------- | ----------------- | -------- |
| element  |                   | Ref      |
| callback | callback function | Function |
