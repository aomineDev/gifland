import { useContext } from 'react'

import AuthContext from 'context/AuthConext'

export default function useAuthContext ({ readonly = true } = {}) {
  const { user, setUser } = useContext(AuthContext)

  if (!readonly) return { user, setUser }

  return { user }
}