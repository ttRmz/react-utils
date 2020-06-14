import { useInterval } from '@ttrmz/react-utils'
import React from 'react'

export function UseInterval() {
  const [count, setCount] = React.useState(0)

  useInterval(() => {
    setCount(count + 1)
  }, 1000)

  return (
    <div>
      <h1>useInterval demo</h1>
      <p>count (1000ms delay) : {count}</p>
    </div>
  )
}
