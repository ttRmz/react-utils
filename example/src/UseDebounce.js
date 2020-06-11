import { useDebounce, useInput } from '@ttrmz/react-utils'
import React from 'react'

export function UseDebounce() {
  const { value, onChange, clear } = useInput('')
  const debouncedValue = useDebounce(value, 500)

  return (
    <div>
      <h1>useDebounce demo</h1>

      <input value={value} onChange={onChange} />
      <button onClick={clear}>clear</button>

      <p>debounced value (500ms) : {debouncedValue}</p>
    </div>
  )
}
