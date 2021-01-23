import { useState, useEffect } from 'react'
import { Link, useRoute } from 'wouter'
import useAuth from 'hooks/useAuth'
import useUserContext from 'hooks/useUserContext'

import userIcon from 'assets/icons/user.svg'

import './styles.css'

export default function AuthHeader ({ location }) {
  const [showDropdown, setShowDropdown] = useState(false)

  const { isLogged, logout } = useAuth()
  const { profile } = useUserContext()
  const [matchLogin] = useRoute('/login')
  const [matchRegister] = useRoute('/register')

  let HeaderDropdownClassName = 'Header-dropdown'

  if (showDropdown) HeaderDropdownClassName += ' active'

  useEffect(() => {
    setShowDropdown(false)
  }, [location])

  function handleClick () {
    logout()
  }

  function handleIconClick () {
    setShowDropdown(!showDropdown)
  }

  return (
    <div className="Header-auth">
      {isLogged
        ? <div className="Header-user">
            <Link to='/user' className="Header-user-name">{profile.username}</Link>
            <button className="Header-btn Header-btn-two" onClick={handleClick}>Logout</button>
          </div>
        : <div className="Header-auth-actions">
            {!matchLogin && <Link to='/login' className="Header-btn">Login</Link>}
            {!matchRegister && <Link to='/register' className="Header-btn Header-btn-one">Register</Link>}
          </div> 
      }
      <button className="Header-auth-btn" onClick={handleIconClick}>
        <img src={userIcon} alt="search"/>
      </button>
      <ul className={HeaderDropdownClassName}>
        {isLogged
          ? <>
              <li className="Header-dropdown-item"><Link to='/user' className="Header-dropdown-text">{profile.username}</Link></li>
              <li className="Header-dropdown-item"><button className="Header-dropdown-text" onClick={handleClick}>Logout</button></li>
            </>
          : <>
              <li className="Header-dropdown-item"><Link to='/login' className="Header-dropdown-text">Login</Link></li>
              <li className="Header-dropdown-item"><Link to='/register' className="Header-dropdown-text">Register</Link></li>
            </> 
        }
      </ul>
    </div>
  )
}
