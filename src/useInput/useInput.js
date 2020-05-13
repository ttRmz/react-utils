import React from 'react'

export function useInput(initialValue) {
  const stringified = initialValue.toString()
  const [value, setValue] = React.useState(stringified)
  const onChange = React.useCallback((e) => setValue(e.target.value), [])

  const clear = React.useCallback(() => setValue(''), [])

  return React.useMemo(
    () => ({
      value,
      setValue,
      hasValue: value !== undefined && value !== null && value.trim() !== '',
      clear,
      onChange
    }),
    [clear, onChange, value, setValue]
  )
}
