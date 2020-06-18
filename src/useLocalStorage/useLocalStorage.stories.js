import React from 'react'
import { useInput, useLocalStorage } from '..'
import README from './useLocalStorage.md'

export default {
  title: 'Hooks|useLocalStorage',
  parameters: {
    readme: {
      sidebar: README
    }
  }
}

export const Text = () => {
  const [storedValue, setStoredValue] = useLocalStorage(
    'Hooks|useLocalStorageString_demoKey',
    ''
  )

  return (
    <div>
      <input
        value={storedValue}
        onChange={(e) => setStoredValue(e.target.value)}
        placeholder="type text here"
      />

      <button onClick={() => setStoredValue('')}>clear</button>

      <p>LocalStorage : {storedValue}</p>
    </div>
  )
}

Text.story = {
  name: 'Demo with input'
}

export const User = () => {
  const INITIAL_LOCAL_STORAGE = { name: 'John', username: 'Doe' }

  const [storedValue, setStoredValue] = useLocalStorage(
    'Hooks|useLocalStorageObject_demoKey',
    INITIAL_LOCAL_STORAGE
  )

  return (
    <div>
      <label>
        Name
        <input
          value={storedValue.name}
          onChange={(e) =>
            setStoredValue({ ...storedValue, name: e.target.value })
          }
        />
      </label>

      <label>
        Username
        <input
          value={storedValue.username}
          onChange={(e) =>
            setStoredValue({ ...storedValue, username: e.target.value })
          }
        />
      </label>

      <button
        onClick={() => {
          setStoredValue(INITIAL_LOCAL_STORAGE)
        }}
      >
        reset
      </button>

      <p>LocalStorage : {JSON.stringify(storedValue)}</p>
    </div>
  )
}

User.story = {
  name: 'Demo with object'
}

export const Fruits = () => {
  const INITIAL_LOCAL_STORAGE = [
    'apple',
    'banana',
    'peach',
    'avocado',
    'pineapple'
  ]

  const [storedValue, setStoredValue] = useLocalStorage(
    'Hooks|useLocalStorageArray_demoKey',
    INITIAL_LOCAL_STORAGE
  )

  const { value, onChange, setValue } = useInput('')

  return (
    <div>
      <input value={value} onChange={onChange} />

      <button
        onClick={() => {
          setStoredValue([...storedValue, value])
          setValue('')
        }}
        disabled={!value || storedValue.includes(value)}
      >
        add
      </button>

      <button
        onClick={() => {
          setStoredValue(INITIAL_LOCAL_STORAGE)
        }}
      >
        reset
      </button>

      {storedValue.map((fruit, index) => (
        <p key={index}>
          {fruit}{' '}
          <button
            onClick={() => {
              setStoredValue(storedValue.filter((curr) => curr !== fruit))
            }}
          >
            remove
          </button>{' '}
        </p>
      ))}

      <p>LocalStorage : {JSON.stringify(storedValue)}</p>
    </div>
  )
}

Fruits.story = {
  name: 'Demo with array'
}
