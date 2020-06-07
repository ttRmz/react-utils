import React from 'react'
import { UseEventListener } from './UseEventListener'
import { UseInput } from './UseInput'
import { UseLocalStorage } from './UseLocalStorage'

const App = () => {
  return (
    <>
      <UseInput />
      <UseLocalStorage />
      <UseEventListener />
    </>
  )
}
export default App
