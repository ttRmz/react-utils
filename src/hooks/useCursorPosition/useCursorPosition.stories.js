import React from 'react'
import { useCursorPosition } from '..'
import README from './useCursorPosition.md'

export default {
  title: 'Hooks/useCursorPosition',
  parameters: {
    readme: {
      sidebar: README
    }
  }
}

export const Basic = () => {
  const { x, y } = useCursorPosition()

  return (
    <div>
      <p>x position : {x}</p>
      <p>y position : {y}</p>
    </div>
  )
}

Basic.story = {
  name: 'Basic usage'
}
