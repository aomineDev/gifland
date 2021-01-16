import { useState, useCallback } from 'react'

import useAuthContext from 'hooks/useAuthContext'

import { signIn } from 'services/auth'

export default function useAuth () {
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  const { token, updateToken, removeUser } = useAuthContext({ readonly: false })
  
  const login = useCallback(credentials => {
    setIsLoading(true)

    return signIn(credentials)
      .then(response => {
        delete response.user.password
        
        updateToken(response)
      })
      .catch(err => {
        setHasError(true)
        console.error('[err] ' + err.message)
      })
      .finally(() => setIsLoading(false))
  }, [updateToken])

  const logout = useCallback(() => {
    removeUser()
  }, [removeUser])

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
