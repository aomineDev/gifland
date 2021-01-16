import { useState, createContext } from 'react'

const AuthContext = createContext('')

function getTokenFromStorage () {
  let tokenFromStorage = window.sessionStorage.getItem('token')

  if (!tokenFromStorage) tokenFromStorage = ''

  return tokenFromStorage
}

export function AuthContextProvider ({ children }) {
  const [token, setToken] = useState(() => getTokenFromStorage())

  const value = {
    token,
    setToken
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext