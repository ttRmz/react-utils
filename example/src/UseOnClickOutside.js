import { useOnClickOutside } from '@ttrmz/react-utils'
import React from 'react'

export function UseOnClickOutside() {
  const element = React.useRef()

  const [outside, setOutside] = React.useState(false)

  useOnClickOutside(element, () => setOutside(true))

  return (
    <>
      <h1>useOnClickOutside demo</h1>

      <div
        onClick={() => setOutside(false)}
        style={{ height: 56, width: 56, background: 'blue' }}
        ref={element}
      />

      <p>clicked outside : {outside ? 'yes' : 'no'}</p>
    </>
  )
}
