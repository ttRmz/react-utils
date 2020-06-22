import React from 'react'
import { useTimeout } from '../..'
import README from './useTimeout.md'

export default {
  title: 'Hooks/useTimeout',
  parameters: {
    readme: {
      sidebar: README
    }
  }
}

export const Basic = () => {
  const { start, stop, pending } = useTimeout(() => window.alert('Timeout !'))

  return (
    <div>
      <button onClick={pending ? stop : start}>
        {pending ? 'stop' : 'start'}
      </button>

      <p>{pending ? 'loading...' : 'done !'} </p>
    </div>
  )
}

Basic.story = {
  name: 'Basic usage'
}
