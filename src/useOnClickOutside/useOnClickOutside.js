import { useEventListener } from '../useEventListener'

export function useOnClickOutside(ref, callback) {
  const handler = (event) => {
    if (!ref.current || ref.current.contains(event.target)) {
      return
    }

    callback(event)
  }

  useEventListener('mousedown', handler)
  useEventListener('touchstart', handler)
}
