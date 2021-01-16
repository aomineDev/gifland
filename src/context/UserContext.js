import { useReducer, useEffect, createContext } from 'react'

import { getFavs } from 'services/favs'

import { actions } from 'actions'
import reducer from 'reducer'

const UserContext = createContext({ profile: {}, favs: [] })

function getUserFromStorage () {
  let userFromStorage = window.sessionStorage.getItem('user')

  if (userFromStorage) userFromStorage = JSON.parse(userFromStorage)
  else userFromStorage = { profile: {}, favs: [], token: '' }

  return userFromStorage
}

export function UserContextProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, getUserFromStorage())

  const { updateProfile, updateToken, updateFavs, removeUser } = actions(dispatch)
  const { profile, favs, token } = state

  const value = { profile, favs, token, updateProfile, updateToken, updateFavs, removeUser }

  useEffect(() => {
    if (!token || favs.length) return

    getFavs({ token })
      .then(updateFavs)
  }, [token]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
