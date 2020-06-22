import { act, renderHook } from '@testing-library/react-hooks'
import { useLocalStorage } from './useLocalStorage'

const initailState = 'testValue'
const localStorageTestKey = 'testKey'

describe('useInput', () => {
  it('should initialize state value', () => {
    const { result } = renderHook(() =>
      useLocalStorage(localStorageTestKey, initailState)
    )

    const [value] = result.current

    expect(value).toBe(initailState)
  })

  it('should initialize state value with object', () => {
    const { result } = renderHook(() =>
      useLocalStorage(localStorageTestKey, { initailState })
    )

    const [value] = result.current

    expect(value.initailState).toBe(initailState)
  })

  it('should initialize state value with array', () => {
    const { result } = renderHook(() =>
      useLocalStorage(localStorageTestKey, [initailState])
    )

    const [value] = result.current

    expect(value[0]).toBe(initailState)
  })

  it('should change state value', () => {
    const customValue = 'customValue'

    const { result } = renderHook(() =>
      useLocalStorage(localStorageTestKey, initailState)
    )

    const [, setValue] = result.current

    act(() => {
      setValue(customValue)
    })

    const [value] = result.current
    expect(value).toBe(customValue)
  })
})
