import React from 'react'
import { useOnClickOutside } from '..'
import README from './useOnClickOutside.md'

export default {
  title: 'Hooks|useOnClickOutside',
  parameters: {
    readme: {
      sidebar: README
    }
  }
}

export const Basic = () => {
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

Basic.story = {
  name: 'Basic usage'
}
