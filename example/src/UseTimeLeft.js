import { useInput, useTimeLeft } from '@ttrmz/react-utils'
import React from 'react'

const DATE_PLUS_2_WEEKS = new Date(+new Date() + 12096e5)

export function UseTimeLeft() {
  return (
    <>
      <UseTimeLeftDefault />
      <UseTimeLeftRelative />
    </>
  )
}

function UseTimeLeftDefault() {
  const { value: date, onChange: setDate } = useInput('')

  const { days, hours, minutes, seconds } = useTimeLeft(
    date || DATE_PLUS_2_WEEKS,
    { delay: 2000 }
  )

  return (
    <div>
      <h1>useTimeLeft demo</h1>

      <input type={'datetime-local'} value={date} onChange={setDate} />

      <p>days left : {days}</p>
      <p>hours left : {hours}</p>
      <p>minutes left : {minutes}</p>
      <p>seconds left : {seconds}</p>
    </div>
  )
}

function UseTimeLeftRelative() {
  const { value: date, onChange: setDate } = useInput('')

  const { days, hours, minutes, seconds } = useTimeLeft(
    date || DATE_PLUS_2_WEEKS,
    {
      relative: true
    }
  )

  return (
    <div>
      <h1>useTimeLeft demo (relative)</h1>

      <input type={'datetime-local'} value={date} onChange={setDate} />

      <p>days left : {days}</p>
      <p>hours left : {hours}</p>
      <p>minutes left : {minutes}</p>
      <p>seconds left : {seconds}</p>
    </div>
  )
}
