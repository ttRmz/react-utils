import React from 'react'
import { useEventListener } from '..'
import README from './useEventListener.md'

export default {
  title: 'Hooks/useEventListener',
  parameters: {
    readme: {
      sidebar: README
    }
  }
}

export const Basic = () => {
  const [clicked, setClicked] = React.useState(0)

  useEventListener('click', () => setClicked((prev) => prev + 1))

  return <p>you clicked {clicked} times</p>
}

Basic.story = {
  name: 'Basic usage'
}

export const Custom = () => {
  const [clicked, setClicked] = React.useState(0)
  const [element, setElement] = React.useState(null)

  useEventListener('click', () => setClicked((prev) => prev + 1), element)

  return <p ref={setElement}>you clicked {clicked} times on me</p>
}

Custom.story = {
  name: 'On custom element'
}
