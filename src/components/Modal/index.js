import { createPortal } from 'react-dom'

import './styles.css'

function Modal ({ children, closeModal }) {
  function handleClick () {
    closeModal()
  }

  return (
    <div className="Modal">
      <div className="Modal-body">
        <button className="Modal-btn" onClick={handleClick}>X</button>
        {children}
      </div>
    </div>
  ) 
}

export default function ModalPortal ({ children, closeModal }) {
  return createPortal(
    <Modal closeModal={closeModal}>{children}</Modal>,
    document.getElementById('modal-root')
  )
}
