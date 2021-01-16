import { useState, useCallback } from 'react'

import useUserContext from 'hooks/useUserContext'

import { createFav } from 'services/favs'

export default function useUser () {
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  const { updateFavs } = useUserContext({ readonly: false })

  const addToFav = useCallback(({ id, token }) => {
    setIsLoading(true)
    
    return createFav({ id, token })
      .then(updateFavs)
      .catch(err => {
        console.error('[err] ' + err.message)
        setHasError(true)
      })
      .finally(() => setIsLoading(false))
  }, [updateFavs])

  return {
    addToFav,
    isLoading,
    hasError
  }
}
