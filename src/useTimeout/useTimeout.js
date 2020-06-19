import React from 'react'

export function useTimeout(callback = () => {}, delay = 3000) {
  const [pending, setPending] = React.useState(false)
  const savedRefCallback = React.useRef()

  React.useEffect(() => {
    savedRefCallback.current = callback
  }, [callback])

  const start = () => {
    setPending(true)
  }

  const stop = React.useCallback(() => {
    setPending(false)
  }, [])

  const handler = React.useCallback(() => {
    savedRefCallback.current && savedRefCallback.current()
    stop()
  }, [savedRefCallback, stop])

  React.useEffect(() => {
    if (pending) {
      const timeout = window.setTimeout(handler, delay)

      return () => {
        window.clearTimeout(timeout)
      }
    }
  }, [pending, delay, handler])

  return {
    start,
    stop,
    pending
  }
}
