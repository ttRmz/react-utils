import { boolean, number } from '@storybook/addon-knobs'
import React from 'react'
import { useInput, useTimeLeft } from '..'
import README from './useTimeLeft.md'

const DATE_PLUS_2_WEEKS = new Date(+new Date() + 12096e5)

export default {
  title: 'Hooks|useTimeLeft',
  parameters: {
    readme: {
      sidebar: README
    }
  }
}

const Results = ({ days, hours, minutes, seconds }) => (
  <div>
    <p>days left : {days}</p>
    <p>hours left : {hours}</p>
    <p>minutes left : {minutes}</p>
    <p>seconds left : {seconds}</p>
  </div>
)

export const Basic = () => {
  const delay = number('delay', 1000, {
    min: 1000,
    max: 10000,
    step: 1000
  })

  const values = useTimeLeft(DATE_PLUS_2_WEEKS, {
    relative: boolean('relative', false),
    delay
  })

  return <Results {...values} />
}

Basic.story = {
  name: 'Basic usage'
}

export const Relative = () => {
  const { value: date, onChange: setDate } = useInput('')

  const values = useTimeLeft(date || DATE_PLUS_2_WEEKS, {
    relative: true
  })

  return (
    <div>
      <input type="datetime-local" value={date} onChange={setDate} />

      <Results {...values} />
    </div>
  )
}

Relative.story = {
  name: 'Relative values'
}
