# useEventListener

```jsx
import { useEventListener } from '@ttrmz/react-utils'
```

## Usage

```jsx
const Example = () => {
  const [clicked, setClicked] = React.useState(0)

  useEventListener('click', () => setClicked((prev) => prev + 1))

  return <p>you clicked {clicked} times</p>
}
```

### With custom options

```jsx
import React from 'react'

import { useEventListener } from '@ttrmz/react-utils'

const Example = () => {
  const [clicked, setClicked] = React.useState(0)
  const [element, setElement] = React.useState(null)

  useEventListener('click', () => setClicked((prev) => prev + 1), {
    element,
    interval: 250
  })

  return <p ref={setElement}>you clicked {clicked} times on me</p>
}
```

## Parameters

| Name    | Description                                                         | Type     |
| ------- | ------------------------------------------------------------------- | -------- |
| event   | [event's name](https://developer.mozilla.org/en-US/docs/Web/Events) | String   |
| handler | event listener handler that returns the event                       | Function |
| options |                                                                     | Object   |

## Options object

| Name     | Description                                                           | Type    |
| -------- | --------------------------------------------------------------------- | ------- |
| element  | listened element (default value : _window_)                           | Element |
| interval | watch interval delay (default value : _16_, corresponding to 1 frame) | Number  |
