# useLockBodyScroll

```jsx
import { useLockBodyScroll } from '@ttrmz/react-utils'
```

## Usage

```jsx
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
