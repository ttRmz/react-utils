import { useInput } from '@ttrmz/react-utils'
import React from 'react'

export function UseInput() {
  const { value, onChange, clear } = useInput('')

  return (
    <div>
      <input value={value} onChange={onChange} />
      <button onClick={clear}>clear</button>
    </div>
  )
}
