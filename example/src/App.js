import React from 'react'
import { UseEventListener } from './UseEventListener'
import { UseInput } from './UseInput'
import { UseLocalStorage } from './UseLocalStorage'
import { UseLockBodyScroll } from './UseLockBodyScroll'

const App = () => {
  return (
    <>
      <UseInput />
      <UseLocalStorage />
      <UseEventListener />
      <UseLockBodyScroll />
    </>
  )
}
export default App
