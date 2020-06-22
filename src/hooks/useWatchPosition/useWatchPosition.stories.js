import { text, number } from '@storybook/addon-knobs'
import React from 'react'
import { useWatchPosition } from '..'
import README from './useWatchPosition.md'
import { DEFAULT_OPTIONS } from './_internals/constants'

export default {
  title: 'Hooks/useWatchPosition',
  parameters: {
    readme: {
      sidebar: README
    }
  }
}

export const Basic = () => {
  const on = text('on', DEFAULT_OPTIONS.on, 'options')
  const interval = number('interval', DEFAULT_OPTIONS.interval, {}, 'options')
  const width = number('width', 56, {}, 'element')
  const height = number('height', 56, {}, 'element')

  const elementRef = React.useRef()
  const position = useWatchPosition(elementRef, { interval, on })

  return (
    <div
      style={{
        width: '120vw',
        height: '120vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <div style={{ height, width, background: 'blue' }} ref={elementRef} />

      <p>position : {JSON.stringify(position)}</p>
    </div>
  )
}

Basic.story = {
  name: 'Basic usage'
}
