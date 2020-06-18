import { number } from '@storybook/addon-knobs'
import React from 'react'
import { useDebounce, useInput } from '..'
import README from './useDebounce.md'

export default {
  title: 'Hooks|useDebounce',
  parameters: {
    readme: {
      sidebar: README
    }
  }
}

export const Basic = () => {
  const { value, onChange, clear } = useInput('')

  const delay = number('delay', 500, {
    min: 0,
    max: 10000,
    step: 100
  })

  const debouncedValue = useDebounce(value, delay)

  return (
    <div>
      <input value={value} onChange={onChange} />
      <button onClick={clear}>clear</button>

      <p>
        debounced value ({delay}ms) : {debouncedValue}
      </p>
    </div>
  )
}

Basic.story = {
  name: 'Basic usage'
}
