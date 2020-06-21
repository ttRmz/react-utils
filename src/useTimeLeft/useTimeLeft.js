import React from 'react'
import { useInterval } from '../useInterval'

const ONE_SECOND_MS = 1000
const ONE_MINUTE_MS = ONE_SECOND_MS * 60
const ONE_HOUR_MS = ONE_MINUTE_MS * 60
const ONE_DAY_MS = ONE_HOUR_MS * 24

const DEFAULT_OPTIONS = { relative: false, delay: ONE_SECOND_MS }

const getTimeLeft = (time) => time - new Date().getTime()

/**
 * @typedef {Object} Options
 * @property {number} delay - refresh interval delay
 * @property {boolean} relative - if true, days, jours, minutes and seconds values will be relatives between each other
 */

/**
 * @param {Date} date
 * @param {Options}
 */
export function useTimeLeft(date, options = DEFAULT_OPTIONS) {
  const { relative, delay = DEFAULT_OPTIONS.delay } = options

  const time = new Date(date).getTime()

  const [timeLeft, setTimeLeft] = React.useState(getTimeLeft(time))

  useInterval(() => setTimeLeft(getTimeLeft(time)), delay)

  if (relative) {
    const days = Math.trunc(timeLeft / ONE_DAY_MS)
    const hours = Math.trunc(timeLeft / ONE_HOUR_MS) - days * 24
    const minutes =
      Math.trunc(timeLeft / ONE_MINUTE_MS) - days * 24 * 60 - hours * 60
    const seconds =
      Math.trunc(timeLeft / ONE_SECOND_MS) -
      days * 24 * 60 * 60 -
      hours * 60 * 60 -
      minutes * 60

    return { days, hours, minutes, seconds }
  }

  const days = Math.trunc(timeLeft / ONE_DAY_MS)
  const hours = Math.trunc(timeLeft / ONE_HOUR_MS)
  const minutes = Math.trunc(timeLeft / ONE_MINUTE_MS)
  const seconds = Math.trunc(timeLeft / ONE_SECOND_MS)

  return { days, hours, minutes, seconds }
}
