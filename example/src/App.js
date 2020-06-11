import React from 'react'
import { UseDebounce } from './UseDebounce'
import { UseEventListener } from './UseEventListener'
import { UseInput } from './UseInput'
import { UseLocalStorage } from './UseLocalStorage'
import { UseLockBodyScroll } from './UseLockBodyScroll'

const App = () => {
  return (
    <>
      <UseDebounce />
      <UseEventListener />
      <UseInput />
      <UseLocalStorage />
      <UseLockBodyScroll />
    </>
  )
}
export default App
