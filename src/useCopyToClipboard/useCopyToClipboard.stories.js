import { number } from '@storybook/addon-knobs'
import PropTypes from 'prop-types'
import React from 'react'
import { useCopyToClipboard, useInput } from '../'
import README from './useCopyToClipboard.md'

export default {
  title: 'Hooks|useCopyToClipboard',
  parameters: {
    readme: {
      sidebar: README
    }
  }
}

const InputButton = ({ copy, copied }) => {
  const { value, onChange, setValue } = useInput('')

  const onCopy = () => {
    copy(value)
    setValue('')
  }

  return (
    <div>
      <input placeholder={'Text to copy'} onChange={onChange} value={value} />

      <button onClick={onCopy}>{copied ? 'Copied' : 'Copy'}</button>
    </div>
  )
}

InputButton.propTypes = {
  copy: PropTypes.func,
  copied: PropTypes.bool
}

export const Basic = () => {
  const { copy, copied } = useCopyToClipboard()

  return <InputButton copy={copy} copied={copied} />
}

Basic.story = {
  name: 'Basic usage'
}

export const Timeout = () => {
  const delay = number('delay', 3000, {
    min: 0,
    max: 10000,
    step: 1000
  })

  const { copy, copied } = useCopyToClipboard(delay)

  return <InputButton copy={copy} copied={copied} />
}

Timeout.story = {
  name: 'With timeout'
}
