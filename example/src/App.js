import React from 'react'
import { UseCopyToClipboard } from './UseCopyToClipboard'
import { UseDebounce } from './UseDebounce'
import { UseEventListener } from './UseEventListener'
import { UseInput } from './UseInput'
import { UseInterval } from './UseInterval'
import { UseLocalStorage } from './UseLocalStorage'
import { UseLockBodyScroll } from './UseLockBodyScroll'
import { UseOnClickOutside } from './UseOnClickOutside'
import { UseTimeLeft } from './UseTimeLeft'
import { UseTimeout } from './UseTimeout'

const App = () => {
  return (
    <>
      <UseCopyToClipboard />
      <UseDebounce />
      <UseEventListener />
      <UseInput />
      <UseInterval />
      <UseTimeout />
      <UseTimeLeft />
      <UseLocalStorage />
      <UseOnClickOutside />
      <UseLockBodyScroll />
    </>
  )
}
export default App
