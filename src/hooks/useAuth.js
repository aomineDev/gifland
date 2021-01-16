import { useState, useCallback } from 'react'

import useAuthContext from 'hooks/useAuthContext'
import useUserContext from 'hooks/useUserContext'

import { signIn } from 'services/auth'

export default function useAuth () {
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  const { token, setToken } = useAuthContext({ readonly: false })
  const { setUser } = useUserContext({ readonly: false })
  
  const login = useCallback(credentials => {
    setIsLoading(true)

    return signIn(credentials)
      .then((response) => {
        console.log(response)
        delete response.user.password
        
        const userData = {
          profile: response.user,
          favs: []
        }
        console.log(userData)

        window.sessionStorage.setItem('user', JSON.stringify(userData))
        window.sessionStorage.setItem('token', response.jwt)

        setUser(userData)
        setToken(response.jwt)
      })
      .catch(err => {
        setHasError(true)
        console.error('[err] ' + err.message)
      })
      .finally(() => setIsLoading(false))
  }, [setUser, setToken])

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('token')
    window.sessionStorage.removeItem('user')

    setUser({ profile: {}, favs: [] })
    setToken('')
  }, [setUser, setToken])

  return {
    isLogged: Boolean(token),
    isLoading,
    setIsLoading,
    hasError,
    setHasError,
    login,
    logout,
  }
}
