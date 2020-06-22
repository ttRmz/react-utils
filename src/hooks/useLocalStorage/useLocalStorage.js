import { useState } from 'react'

export function useLocalStorage(key, initialValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      const prevValue = window.localStorage.getItem(key)
      return prevValue ? JSON.parse(prevValue) : initialValue
    } catch (error) {
      console.warn(
        'useLocalStorage : Failed to parse previous value. LocalStorage has been reset with initialValue'
      )
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      const newValue =
        value instanceof Function ? value(localStorageValue) : value

      setLocalStorageValue(newValue)
      window.localStorage.setItem(key, JSON.stringify(newValue))
    } catch (error) {
      console.error('useLocalStorage : Failed to set new value', error)
    }
  }

  return [localStorageValue, setValue]
}
