import { useInput, useLocalStorage } from '@ttrmz/react-utils'
import React from 'react'

export function UseLocalStorage() {
  return (
    <>
      <UseLocalStorageString />
      <UseLocalStorageObject />
      <UseLocalStorageArray />
    </>
  )
}

function UseLocalStorageString() {
  const INITIAL_LOCAL_STORAGE = 'local storage initial value'

  const [storedValue, setStoredValue] = useLocalStorage(
    'UseLocalStorageString_demoKey',
    INITIAL_LOCAL_STORAGE
  )

  return (
    <div>
      <h1>useLocalStorage demo</h1>

      <input
        value={storedValue}
        onChange={(e) => setStoredValue(e.target.value)}
      />
      <button onClick={() => setStoredValue('')}>clear</button>
      <button
        onClick={() => {
          setStoredValue(INITIAL_LOCAL_STORAGE)
        }}
      >
        reset
      </button>

      <p>LocalStorage : {storedValue}</p>
    </div>
  )
}

function UseLocalStorageObject() {
  const INITIAL_LOCAL_STORAGE = { name: 'John', username: 'Doe' }

  const [storedValue, setStoredValue] = useLocalStorage(
    'UseLocalStorageObject_demoKey',
    INITIAL_LOCAL_STORAGE
  )

  return (
    <div>
      <h1>useLocalStorage demo (with object)</h1>

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

function UseLocalStorageArray() {
  const INITIAL_LOCAL_STORAGE = [
    'apple',
    'banana',
    'peach',
    'avocado',
    'pineapple'
  ]

  const [storedValue, setStoredValue] = useLocalStorage(
    'UseLocalStorageArray_demoKey',
    INITIAL_LOCAL_STORAGE
  )

  const { value, onChange, setValue } = useInput('')

  return (
    <div>
      <h1>useLocalStorage demo (with array)</h1>

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
