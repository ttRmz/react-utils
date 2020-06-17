import { useCopyToClipboard, useInput } from '@ttrmz/react-utils'
import React from 'react'

export function UseCopyToClipboard() {
  const { copy, copied } = useCopyToClipboard()
  const { value, onChange } = useInput('')

  return (
    <div>
      <h1>useCopyToClipboard demo</h1>

      <input onChange={onChange} value={value} />

      <button onClick={() => copy(value)}>{copied ? 'Copied' : 'Copy'}</button>
    </div>
  )
}
