import { ensureValue } from './ensureValue'

const TRUE_FUNC = () => true
const NULL_FUNC = () => null

describe('isPromise', () => {
  it('should ensure to be null if fallback is not set', () => {
    expect(ensureValue()).toBeNull()
    expect(ensureValue(null)).toBeNull()
    expect(ensureValue(undefined)).toBeNull()
  })

  it('should not override falsy values', () => {
    expect(ensureValue(false, 1)).toBe(false)
    expect(ensureValue(0, 1)).toBe(0)
    expect(ensureValue('', 'test')).toBe('')
  })

  it('should not override function', () => {
    expect(ensureValue(TRUE_FUNC, 'true ?')).toBe(TRUE_FUNC)
    expect(ensureValue(NULL_FUNC, 'null ?')).toBe(NULL_FUNC)
  })

  it('should ensure values', () => {
    expect(ensureValue(undefined, 'test')).toBe('test')
    expect(ensureValue(NaN, 0)).toBe(0)
    expect(ensureValue(null, 123)).toBe(123)
    expect(ensureValue(NULL_FUNC(), '')).toBe('')
  })

  it('should ensure objects', () => {
    expect(ensureValue({}, [])).toStrictEqual({})
  })

  it('should ensure arrays', () => {
    expect(ensureValue([], [])).toStrictEqual([])
  })
})
