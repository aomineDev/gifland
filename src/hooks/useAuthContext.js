import { useContext } from 'react'

import UserContext from 'context/UserContext'

export default function useAuthContext ({ readonly = true } = {}) {
  const { token, updateToken, removeUser } = useContext(UserContext)

  if (!readonly) return { token, updateToken, removeUser }

  return { token }
}
