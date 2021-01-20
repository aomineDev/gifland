import { useState } from 'react'
import useAuthContext from 'hooks/useAuthContext'
import useUserContext from 'hooks/useUserContext'
import useAuth from 'hooks/useAuth'
import useUser from 'hooks/useUser'

import Modal from 'components/Modal'
import LoginForm from 'components/LoginForm'

import './styles.css'

export default function Fav ({ id }) {
  const [showModal, setShowModal] = useState(false)

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

  return (
    <>
      <button onClick={handleClick} className="Fav">
        <span arial-label="Fav img" role="img" className={favIconClassName}>❤</span>
      </button>

      {showModal && (
        <Modal closeModal={() => setShowModal(false)}>
          <LoginForm onLogin={()=> setShowModal(false)} />
        </Modal>
      )}
    </>
  )
}
