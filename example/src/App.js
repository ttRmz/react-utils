import React from 'react'
import { UseDebounce } from './UseDebounce'
import { UseEventListener } from './UseEventListener'
import { UseInput } from './UseInput'
import { UseInterval } from './UseInterval'
import { UseLocalStorage } from './UseLocalStorage'
import { UseLockBodyScroll } from './UseLockBodyScroll'
import { UseOnClickOutside } from './UseOnClickOutside'
import { UseTimeLeft } from './UseTimeLeft'

const App = () => {
  return (
    <>
      <UseDebounce />
      <UseEventListener />
      <UseInput />
      <UseInterval />
      <UseTimeLeft />
      <UseLocalStorage />
      <UseOnClickOutside />
      <UseLockBodyScroll />
    </>
  )
}
export default App
