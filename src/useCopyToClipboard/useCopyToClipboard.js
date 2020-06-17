import React from 'react'
import { copyToClipboard } from '../copyToClipboardd'
import { useTimeout } from '../useTimeout'

export function useCopyToClipboard(successDuration = 0) {
  const [copied, setCopied] = React.useState(false)
  const [error, setError] = React.useState(null)

  const resetStates = () => {
    setCopied(false)
    setError(null)
  }
  const { start } = useTimeout(resetStates, successDuration)

  const copy = (text) => {
    copyToClipboard(text, (error) => {
      setCopied(!error)
      setError(error)

      if (!error && typeof successDuration === 'number' && successDuration > 0)
        start()
    })
  }

  return { copied, copy, error }
}
