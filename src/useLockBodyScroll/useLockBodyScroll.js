import React from 'react'

export function useLockBodyScroll() {
  React.useLayoutEffect(() => {
    const previousBodyOverflow = window.getComputedStyle(document.body).overflow

    document.body.style.overflow = 'hidden'

    return () => (document.body.style.overflow = previousBodyOverflow)
  }, [])
}
