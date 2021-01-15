import { useState, useEffect } from 'react'

import useGifsContext from 'hooks/useGifsContext'

import { getGif } from 'services/gifs'
  
export default function useGif ({ id }) {
  const { gifs } = useGifsContext()

  const [gif, setGif] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (!id) return setHasError(true)

    setIsLoading(true)

    if (gifs.length) {
      const gifFromCache = gifs.find(gif => gif.id === id)

      setGif(gifFromCache)
      setIsLoading(false)
    }

    getGif({ id })
      .then(setGif)
      .catch(err => {
        console.error(err)
        setHasError(true)
      })
      .finally(() => setIsLoading(false))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return { gif, isLoading, hasError }
}
