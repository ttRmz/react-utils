import React from 'react'
import { useInput } from '..'
import README from './useInput.md'

export default {
  title: 'Hooks/useInput',
  parameters: {
    readme: {
      sidebar: README
    }
  }
}

export const Basic = () => {
  const { value, onChange } = useInput('')

  return (
    <input placeholder="type text here" value={value} onChange={onChange} />
  )
}

Basic.story = {
  name: 'Basic usage'
}
