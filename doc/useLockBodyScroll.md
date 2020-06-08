# useLockBodyScroll

## Usage

```jsx
import React from 'react'

import { useLockBodyScroll } from '@ttrmz/react-utils'

const Modal = () => {
  useLockBodyScroll()

  return <span>Modal</span>
}

const Example = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>open modal</button>

      {open && <Modal />}
    </>
  )
}
```
