import { useContext } from 'react'

import AuthContext from 'context/AuthConext'

export default function useAuthContext ({ readonly = true } = {}) {
  const { token, setToken } = useContext(AuthContext)

  if (!readonly) return { token, setToken }
  if (!readonly) return { token, setToken }
  if (!readonly) return { token, setToken }
  if (!readonly) return { token, setToken }

  return { token }
}
