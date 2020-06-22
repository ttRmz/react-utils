import { number } from '@storybook/addon-knobs'
import React from 'react'
import { useInterval } from '..'
import README from './useInterval.md'

export default {
  title: 'Hooks/useInterval',
  parameters: {
    readme: {
      sidebar: README
    }
  }
}

export const Basic = () => {
  const delay = number('delay', 1000, {
    min: 0,
    max: 10000,
    step: 100
  })

  const [count, setCount] = React.useState(0)

  useInterval(() => {
    setCount(count + 1)
  }, delay)

  return <p>{count}</p>
}

Basic.story = {
  name: 'Basic usage'
}
