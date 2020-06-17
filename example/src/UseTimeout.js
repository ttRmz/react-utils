import { useTimeout } from '@ttrmz/react-utils'
import React from 'react'

export function UseTimeout() {
  const { start, stop, pending } = useTimeout(() => window.alert('Timeout !'))

  return (
    <div>
      <h1>useTimeout demo</h1>

      <button onClick={pending ? stop : start}>
        {pending ? 'stop' : 'start'}
      </button>

      <p>{pending ? 'loading...' : 'done !'} </p>
    </div>
  )
}
