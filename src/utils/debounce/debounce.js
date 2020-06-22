export function debounce(fn, delay) {
  let timeout

  return (...args) => {
    const context = this

    const later = () => {
      timeout = null
      if (delay) fn.apply(context, args)
    }

    const callNow = !delay && !timeout

    clearTimeout(timeout)

    timeout = setTimeout(later, delay)

    if (callNow) fn.apply(context, args)
  }
}
