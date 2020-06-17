import React from 'react'

export function useTimeout(callback = () => {}, delay = 3000) {
  const [pending, setPending] = React.useState(false)
  const savedRefCallback = React.useRef()

  React.useEffect(() => {
    savedRefCallback.current = callback
  }, [callback])

  function handler() {
    savedRefCallback.current && savedRefCallback.current()
    stop()
  }

  function stop() {
    setPending(false)
  }

  function start() {
    setPending(true)
  }

  React.useEffect(() => {
    if (pending) {
      const timeout = window.setTimeout(handler, delay)

      return () => {
        window.clearTimeout(timeout)
      }
    }
  }, [pending])

  return {
    start,
    stop,
    pending
  }
}
