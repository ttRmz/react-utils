import React from 'react'
import { debounce } from '../../utils'
import { DEFAULT_OPTIONS } from './_internals/constants'

/**
 * @typedef {Object} Options
 * @property {number} interval - watch interval delay
 * @property {string} on - event's name (see : https://developer.mozilla.org/en-US/docs/Web/Events)
 */

/**
 * @param {React.RefObject} ref
 * @param {Options}
 */
export function useWatchPosition(ref, options = DEFAULT_OPTIONS) {
  const { on, interval } = { ...options, DEFAULT_OPTIONS }

  const [position, setPosition] = React.useState({})

  const getPosition = React.useCallback(() => {
    setPosition(ref.current?.getBoundingClientRect() || {})
  }, [ref])

  const debouncedHandler = React.useMemo(
    () => debounce(getPosition, interval),
    [interval, getPosition]
  )

  React.useLayoutEffect(() => {
    getPosition()
    window.addEventListener(on, debouncedHandler)

    return () => {
      window.removeEventListener(on, debouncedHandler)
    }
  }, [ref, getPosition, debouncedHandler, on])

  return position
}
