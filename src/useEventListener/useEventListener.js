import React from 'react'

export function useEventListener(eventName, handler, element = window) {
  React.useEffect(() => {
    if (!element?.addEventListener) return

    const eventListener = (event) => handler(event)

    element.addEventListener(eventName, eventListener)

    return () => {
      element.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element])
}
