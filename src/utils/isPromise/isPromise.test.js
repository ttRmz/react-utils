import { isPromise } from './isPromise'

describe('isPromise', () => {
  it('should return true', () => {
    expect(isPromise(Promise.resolve())).toBe(true)
    expect(isPromise({ then: function () {} })).toBe(true)
  })
  it('should return false', () => {
    expect(isPromise(null)).toBe(false)
    expect(isPromise({})).toBe(false)
    expect(isPromise({ then: true })).toBe(false)
  })
})
