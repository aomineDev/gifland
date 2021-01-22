import { useCallback } from 'react'

import useAuthContext from 'hooks/useAuthContext'

import { signIn } from 'services/auth'

export default function useAuth () {
  const { token, updateToken, removeUser } = useAuthContext({ readonly: false })
  
  const login = useCallback(credentials => {
    return signIn(credentials)
      .then(data => {
        delete data.user.password
        
        updateToken(data)
      })
  }, [updateToken])

  const logout = useCallback(() => {
    removeUser()
  }, [removeUser])

  return {
    isLogged: Boolean(token),
    login,
    logout
  }
}
