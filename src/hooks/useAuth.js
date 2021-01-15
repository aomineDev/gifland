import { useCallback } from 'react'

import useAuthContext from 'hooks/useAuthContext'
import { signin } from 'services/auth'

export default function useAuth () {
  const { user, setUser } = useAuthContext({ readonly: false })

  const login = useCallback(credentials => {
    return signin(credentials)
      .then(response => {
        delete response.user.password

        setUser({
          profile: response.user,
          token: response.jwt
        })
      })
  }, [setUser])

  const logout = useCallback(() => {
    setUser({})
  }, [setUser])

  return {
    isLogged: Boolean(user.token),
    user: user.profile,
    login,
    logout
  }
}
