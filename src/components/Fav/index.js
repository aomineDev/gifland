import { useState } from 'react'
import useAuthContext from 'hooks/useAuthContext'
import useUserContext from 'hooks/useUserContext'
import useAuth from 'hooks/useAuth'
import useUser from 'hooks/useUser'

import Modal from 'components/Modal'
import LoginForm from 'components/LoginForm'
import RegisterForm from 'components/RegisterForm'

import './styles.css'

export default function Fav ({ id }) {
  const [showModal, setShowModal] = useState(false)
  const [showRegisterForm, setShowRegisterForm] = useState(true)

  const { token } = useAuthContext()
  const { favs } = useUserContext()
  const { isLogged } = useAuth()
  const { addToFav } = useUser()
  
  let isFav = favs.some(GifId => GifId === id)

  let favIconClassName = 'Fav-icon'

  if (isFav) favIconClassName += ' is-fav'

  function handleClick () {
    if (isLogged && !isFav) addToFav({ id, token })
    else setShowModal(true)
  }

  function closeModal () {
    setShowModal(false)
  }

  return (
    <>
      <button onClick={handleClick} className="Fav">
        <span arial-label="Fav img" role="img" className={favIconClassName}>❤</span>
      </button>

      {showModal && (
        <Modal closeModal={closeModal}>
          {showRegisterForm
            ? <RegisterForm onRegister={closeModal} />      
            : <LoginForm onLogin={closeModal} />
          }
          <button className="modal-switch" onClick={() => setShowRegisterForm(!showRegisterForm)}>
            {showRegisterForm
              ? 'do you have an account?'
              : 'i don\'t have an account'
            }
          </button>
        </Modal>
      )}
    </>
  )
}
