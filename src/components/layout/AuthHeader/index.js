import { Link, useRoute } from 'wouter'
import useAuth from 'hooks/useAuth'
import useUserContext from 'hooks/useUserContext'

import './styles.css'

export default function AuthHeader () {
  const { isLogged, logout } = useAuth()
  const { profile } = useUserContext()
  const [matchLogin] = useRoute('/login')
  const [matchRegister] = useRoute('/register')

  function handleClick () {
    logout()
  }

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
              {!matchLogin && <Link to='/login' className="Header-auth-btn">Login</Link>}
              {!matchRegister && <Link to='/register' className="Header-auth-btn Header-btn-one">Register</Link>}
            </>
          )
      }
    </div>
  )
}