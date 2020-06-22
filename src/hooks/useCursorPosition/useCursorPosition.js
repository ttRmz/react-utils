import React from 'react'
import { useEventListener } from '..'

export function useCursorPosition() {
  const [position, setPosition] = React.useState({ x: 0, y: 0 })

  const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY })

  useEventListener('mousemove', setFromEvent)

  return position
}
