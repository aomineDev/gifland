import { useState, createContext } from 'react'

const AuthContext = createContext({ user: {} })

export function AuthContextProvider ({ children }) {
  const [user, setUser] = useState({})

  const value = {
    user,
    setUser
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext