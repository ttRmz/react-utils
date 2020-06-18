import { useEventListener } from '@ttrmz/react-utils'
import PropTypes from 'prop-types'
import React from 'react'

export function UseEventListener() {
  const [listen, setListen] = React.useState(true)
  const [clicked, setClicked] = React.useState(0)

  const [element, setElement] = React.useState(null)
  const [clickedOnElement, setClickedOnElement] = React.useState(0)

  useEventListener(
    'click',
    () => setClickedOnElement((prev) => prev + 1),
    element
  )

  return (
    <>
      <h1>useEventListener demo</h1>

      <button
        onClick={() => {
          setListen((prev) => !prev)
        }}
      >
        {!listen ? 'listen' : 'stop listening'}
      </button>

      <button
        onClick={(event) => {
          event.stopPropagation()
          setClicked(0)
        }}
      >
        reset
      </button>

      <p>you clicked {clicked} times</p>

      {listen && (
        <UseEventListenerElement clicked={clicked} setClicked={setClicked} />
      )}

      <h1>useEventListener demo (on custom element)</h1>

      <p ref={setElement}>you clicked {clickedOnElement} times on me</p>
    </>
  )
}

function UseEventListenerElement({ setClicked }) {
  useEventListener('click', () => setClicked((prev) => prev + 1))

  return null
}

UseEventListenerElement.propTypes = {
  setClicked: PropTypes.func
}
