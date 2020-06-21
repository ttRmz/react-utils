/* eslint-disable react/prop-types */
import React from 'react'
import { useLockBodyScroll, useOnClickOutside } from '..'
import README from './useLockBodyScroll.md'

export default {
  title: 'Hooks|useLockBodyScroll',
  parameters: {
    readme: {
      sidebar: README
    }
  }
}

const modalStyles = {
  width: '80%',
  height: '60%',
  position: 'fixed',
  background: '#FFFFFF',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  top: '50vh',
  transform: 'translateY(-50%)',
  boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
}

const Modal = ({ onClose }) => {
  const modalRef = React.useRef(null)

  useLockBodyScroll()
  useOnClickOutside(modalRef, onClose)

  return (
    <div ref={modalRef} style={modalStyles}>
      <p>
        Hello you !{' '}
        <span role="img" aria-label="hello">
          👋
        </span>
      </p>
      <button onClick={onClose}>close</button>
    </div>
  )
}

export const Basic = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <div
      style={{
        height: '200vh',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: open ? '#F9F9F9' : '#FFFFFF'
      }}
    >
      <button
        style={{
          position: 'fixed',
          top: '50vh',
          transform: 'translateY(-50%)'
        }}
        onClick={() => setOpen(true)}
      >
        open modal
      </button>

      {open && <Modal onClose={() => setOpen(false)} />}
    </div>
  )
}

Basic.story = {
  name: 'Basic usage'
}
