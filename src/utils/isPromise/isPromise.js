export function isPromise(object) {
  return (
    !!object &&
    (typeof object === 'object' || typeof object === 'function') &&
    typeof object.then === 'function'
  )
}
