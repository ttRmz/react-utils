import { act, renderHook } from '@testing-library/react-hooks'
import { useInput } from './useInput'

const initailState = 'testValue'

describe('useInput', () => {
  it('should initialize state value', () => {
    const { result } = renderHook(() => useInput(initailState))

    expect(result.current.value).toBe(initailState)
  })

  it('should set a custom state value', () => {
    const customValue = 'customValue'

    const { result } = renderHook(() => useInput(initailState))

    act(() => {
      result.current.setValue(customValue)
    })

    expect(result.current.value).toBe(customValue)
  })

  it('should set a custom state value', () => {
    const customValue = 'customValue'

    const { result } = renderHook(() => useInput(initailState))

    act(() => {
      result.current.setValue(customValue)
    })

    expect(result.current.value).toBe(customValue)
  })

  it('should clear state value', () => {
    const { result } = renderHook(() => useInput(initailState))

    act(() => {
      result.current.clear()
    })

    expect(result.current.value).toBe('')
  })

  it('should update hasValue', () => {
    const { result } = renderHook(() => useInput(''))

    expect(result.current.hasValue).toBe(false)

    act(() => {
      result.current.setValue('yes')
    })

    expect(result.current.hasValue).toBe(true)
  })
})
