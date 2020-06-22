import React from 'react'
import { MINIMUM_DEBOUNCE_INTERVAL } from '../../core/constants'
import { debounce } from '../../utils'

/**
 * @typedef {Object} Options
 * @property {number} interval - watch interval delay
 * @property {Element} element - targeted element
 */

/**
 * @param {string} event  - event's name (see : https://developer.mozilla.org/en-US/docs/Web/Events)
 * @param {Function} callback - callback function
 * @param {Options}
 */
export function useEventListener(
  event,
  callback,
  { element = window, interval = MINIMUM_DEBOUNCE_INTERVAL } = {}
) {
  React.useEffect(() => {
    if (!element?.addEventListener) return

    const eventListener = debounce((event) => callback(event), interval)

    element.addEventListener(event, eventListener)

    return () => {
      element.removeEventListener(event, eventListener)
    }
  }, [event, element, callback, interval])
}
