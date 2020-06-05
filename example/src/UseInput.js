import { useInput } from '@ttrmz/react-utils'
import React from 'react'

export function UseInput() {
  const { value, onChange, clear } = useInput('')

  return (
    <div>
      <h1>useInput demo</h1>

      <input value={value} onChange={onChange} />
      <button onClick={clear}>clear</button>
    </div>
  )
}
