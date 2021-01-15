import { Link } from 'wouter'

import useAuth from 'hooks/useAuth'

import './styles.css'

export default function AuthHeader () {
  const { isLogged, user, logout } = useAuth()
  console.log('debug', isLogged, user)
  function handleLogout () {
    logout()
  }

  return (
    <div className="Header-auth">
      {
        isLogged
          ? (
            <>
              <Link to='/user' className="Header-auth-username">{user.username}</Link>
              <button className="Header-auth-btn Header-btn-two" onClick={handleLogout}>log out</button>
            </>
          )
          : (
            <>
              <Link to='/login' className="Header-auth-btn">Log In</Link>
              <Link to='/sign-up' className="Header-auth-btn Header-btn-one">Sign Up</Link>
            </>
          )
      }
    </div>
  )
}