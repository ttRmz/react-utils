# useWatchPosition

```jsx
import { useWatchPosition } from '@ttrmz/react-utils'
```

## Usage

```jsx
const Example = () => {
  const position = useWatchPosition(elementRef)

  return (
    <div ref={elementRef}>
      <p>position : {JSON.stringify(position)}</p>
    </div>
  )
}
```

### With custom options

```jsx
const Example = () => {
  const position = useWatchPosition(elementRef, {
    interval: 250,
    on: "resize"
  })

  ...
}
```

## Parameters

| Name   | Description      | Type            |
| ------ | ---------------- | --------------- |
| ref    | element to watch | React.RefObject |
| option |                  | Object          |

## Options object

| Key      | Description                                                                                                        | Type   |
| -------- | ------------------------------------------------------------------------------------------------------------------ | ------ |
| on       | [event](https://developer.mozilla.org/en-US/docs/Web/Events) listener applied to window (default value : _scroll_) | String |
| interval | watch interval delay (default value : _16_, corresponding to 1 frame)                                              | Number |

## Returned object

| Key    | Type   |
| ------ | ------ |
| x      | Number |
| y      | Number |
| width  | Number |
| height | Number |
| top    | Number |
| bottum | Number |
| right  | Number |
| left   | Number |
