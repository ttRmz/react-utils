import { number, text } from '@storybook/addon-knobs'
import React from 'react'
import { useEventListener } from '..'
import { MINIMUM_DEBOUNCE_INTERVAL } from '../../core/constants'
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
  const interval = number('options.interval', MINIMUM_DEBOUNCE_INTERVAL, {})
  const event = text('event', 'click')

  useEventListener(event, () => setClicked((prev) => prev + 1), {
    interval
  })

  return <p>you clicked {clicked} times</p>
}

Basic.story = {
  name: 'Basic usage'
}

export const Custom = () => {
  const [clicked, setClicked] = React.useState(0)
  const [element, setElement] = React.useState(null)
  const interval = number('options.interval', MINIMUM_DEBOUNCE_INTERVAL, {})
  const event = text('event', 'click')

  useEventListener(event, () => setClicked((prev) => prev + 1), {
    element,
    interval
  })

  return <p ref={setElement}>you clicked {clicked} times on me</p>
}

Custom.story = {
  name: 'On custom element'
}
