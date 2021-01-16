import { useState, createContext } from 'react'

const UserContext = createContext({ profile: {}, favs: [] })

function getUserFromStorage () {
  let userFromStorage = window.sessionStorage.getItem('user')

  if (userFromStorage) userFromStorage = JSON.parse(userFromStorage)
  else userFromStorage = { profile: {}, favs: [] }

  return userFromStorage
}

export function UserContextProvider ({ children }) {
  const [user, setUser] = useState(() => getUserFromStorage())

  const value = {
    user,
    setUser
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext