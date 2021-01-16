import { useState, useCallback } from 'react'

import useUserContext from 'hooks/useUserContext'

import { createFav } from 'services/favs'

export default function useUser () {
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  const { profile, setUser } = useUserContext({ readonly: false })

  const addToFav = useCallback(({ id, token }) => {
    setIsLoading(true)
    
    return createFav({ id, token })
      .then(newFavs => {
        const userData = {
          profile,
          favs: newFavs
        }

        setUser(userData)

        window.sessionStorage.setItem('user', JSON.stringify(userData))
      })
      .catch(err => {
        console.error('[err] ' + err.message)
        setHasError(true)
      })
      .finally(() => setIsLoading(false))
  }, [setUser, profile])

  return {
    addToFav,
    isLoading,
    hasError
  }
}
