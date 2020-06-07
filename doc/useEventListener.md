# useEventListener

## Usage

```jsx
import React from 'react'

import { useEventListener } from '@ttrmz/react-utils'

const Example = () => {
  const [clicked, setClicked] = React.useState(0)

  useEventListener('click', () => setClicked((prev) => prev + 1))

  return <p>you clicked {clicked} times</p>
}
```

## Usage (on custom element)

```jsx
import React from 'react'

import { useEventListener } from '@ttrmz/react-utils'

const Example = () => {
  const [clicked, setClicked] = React.useState(0)
  const [element, setElement] = React.useState(null)

  useEventListener('click', () => setClicked((prev) => prev + 1), element)

  return <p ref={setElement}>you clicked {clicked} times on me</p>
}
```

## Parameters

| Name      | Description                                                         | Type     |
| --------- | ------------------------------------------------------------------- | -------- |
| eventName | [event's name](https://developer.mozilla.org/en-US/docs/Web/Events) | String   |
| handler   | event listener handler that returns the event                       | Function |
| element   | listened element (default value : _window_)                         | Element  |
