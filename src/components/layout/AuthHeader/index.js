import { Link, useRoute } from 'wouter'
import useAuth from 'hooks/useAuth'
import useUserContext from 'hooks/useUserContext'

import './styles.css'

export default function AuthHeader () {
  const { isLogged, logout } = useAuth()
  const { profile } = useUserContext()
  const [match] = useRoute('/login')

  function handleClick () {
    logout()
  }

  if (match) return null

  return (
    <div className="Header-auth">
      {
        isLogged
          ? (
            <>
              <Link to='/user' className="Header-auth-username">{profile.username}</Link>
              <button className="Header-auth-btn Header-btn-two" onClick={handleClick}>Logout</button>
            </>
          )
          : (
            <>
              <Link to='/login' className="Header-auth-btn">Login</Link>
              <Link to='/register' className="Header-auth-btn Header-btn-one">Register</Link>
            </>
          )
      }
    </div>
  )
}