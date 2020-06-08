import { useLockBodyScroll } from '@ttrmz/react-utils'
import React from 'react'

export function UseLockBodyScroll() {
  const [locked, setLocked] = React.useState(false)

  return (
    <>
      <h1>useLockBodyScroll demo</h1>

      <button
        onClick={() => {
          setLocked((prev) => !prev)
        }}
      >
        {locked ? 'unlock' : 'lock'}
      </button>

      {locked && <UseLockBodyScrollElement />}
    </>
  )
}

function UseLockBodyScrollElement() {
  useLockBodyScroll()

  return null
}
